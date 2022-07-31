import NonFungibleToken from "./NonFungibleToken.cdc"
import MetadataViews from "./MetadataViews.cdc"

pub contract TopJockNFT: NonFungibleToken {

    // Events
    //
    pub event ContractInitialized()
    pub event Withdraw(id: UInt64, from: Address?)
    pub event Deposit(id: UInt64, to: Address?)
    pub event Minted(id: UInt64, kind: UInt8, rarity: UInt8)
    pub event ImagesAddedForNewKind(kind: UInt8)

    // Named Paths
    //
    pub let CollectionStoragePath: StoragePath
    pub let CollectionPublicPath: PublicPath
    pub let MinterStoragePath: StoragePath

    // totalSupply
    // The total number of TopJockNFTs that have been minted
    //
    pub var totalSupply: UInt64

    pub enum Rarity: UInt8 {
        pub case diamond
        pub case platinum
        pub case gold
        pub case silver
    }

    pub fun rarityToString(_ rarity: Rarity): String {
        switch rarity {
            case Rarity.diamond:
                return "Diamond"
            case Rarity.platinum:
                return "Platinum"
            case Rarity.gold:
                return "Gold"
            case Rarity.silver:
                return "Silver"
        }

        return ""
    }

    pub enum Kind: UInt8 {
        pub case football
        pub case basketball
        pub case baseball
        pub case soccer
        pub case tennis
    }

    pub fun kindToString(_ kind: Kind): String {
        switch kind {
            case Kind.football:
                return "Football"
            case Kind.basketball:
                return "Basketball"
            case Kind.baseball:
                return "Baseball"
            case Kind.soccer:
                return "Soccer"
            case Kind.tennis:
                return "Tennis"
        }

        return ""
    }

    // Mapping from item (kind, rarity) -> IPFS image CID
    //
    access(self) var images: {Kind: {Rarity: String}}

    // Mapping from rarity -> price
    //
    access(self) var itemRarityPriceMap: {Rarity: UFix64}

    // Return the initial sale price for an item of this rarity.
    //
    pub fun getItemPrice(rarity: Rarity): UFix64 {
        return self.itemRarityPriceMap[rarity]!
    }

    // A TopJock as an NFT
    //
    pub resource NFT: NonFungibleToken.INFT, MetadataViews.Resolver {

        pub let id: UInt64

        // The token kind (e.g. Fishbowl)
        pub let kind: Kind

        // The token rarity (e.g. Gold)
        pub let rarity: Rarity

        pub let ipfsHash: String

        init(id: UInt64, kind: Kind, rarity: Rarity, ipfsHash:String) {
            self.id = id
            self.kind = kind
            self.rarity = rarity
            self.ipfsHash = ipfsHash
        }

        pub fun name(): String {
            return TopJockNFT.rarityToString(self.rarity)
                .concat(" ")
                .concat(TopJockNFT.kindToString(self.kind))
        }

        pub fun description(): String {
            return "A "
                .concat(TopJockNFT.rarityToString(self.rarity).toLower())
                .concat(" ")
                .concat(TopJockNFT.kindToString(self.kind).toLower())
                .concat(" with serial number ")
                .concat(self.id.toString())
        }

        pub fun imageCID(): String {
            return self.ipfsHash
        }

        pub fun getViews(): [Type] {
            return [
                Type<MetadataViews.Display>()
            ]
        }

        pub fun resolveView(_ view: Type): AnyStruct? {
            switch view {
                case Type<MetadataViews.Display>():
                    return MetadataViews.Display(
                        name: self.name(),
                        description: self.description(),
                        thumbnail: MetadataViews.IPFSFile(
                            cid: self.imageCID(),
                            path: "sm.png"
                        )
                    )
            }

            return nil
        }
    }

    // This is the interface that users can cast their TopJockNFT Collection as
    // to allow others to deposit TopJockNFT into their Collection. It also allows for reading
    // the details of TopJockNFT in the Collection.
    pub resource interface TopJockNFTCollectionPublic {
        pub fun deposit(token: @NonFungibleToken.NFT)
        pub fun getIDs(): [UInt64]
        pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT
        pub fun borrowTopJockNFT(id: UInt64): &TopJockNFT.NFT? {
            // If the result isn't nil, the id of the returned reference
            // should be the same as the argument to the function
            post {
                (result == nil) || (result?.id == id):
                    "Cannot borrow TopJockNFT reference: The ID of the returned reference is incorrect"
            }
        }
    }

    // Collection
    // A collection of TopJockNFT NFTs owned by an account
    //
    pub resource Collection: TopJockNFTCollectionPublic, NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection {
        // dictionary of NFT conforming tokens
        // NFT is a resource type with an `UInt64` ID field
        //
        pub var ownedNFTs: @{UInt64: NonFungibleToken.NFT}

        // withdraw
        // Removes an NFT from the collection and moves it to the caller
        //
        pub fun withdraw(withdrawID: UInt64): @NonFungibleToken.NFT {
            let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic("missing NFT")

            emit Withdraw(id: token.id, from: self.owner?.address)

            return <-token
        }

        // deposit
        // Takes a NFT and adds it to the collections dictionary
        // and adds the ID to the id array
        //
        pub fun deposit(token: @NonFungibleToken.NFT) {
            let token <- token as! @TopJockNFT.NFT

            let id: UInt64 = token.id

            // add the new token to the dictionary which removes the old one
            let oldToken <- self.ownedNFTs[id] <- token

            emit Deposit(id: id, to: self.owner?.address)

            destroy oldToken
        }

        // getIDs
        // Returns an array of the IDs that are in the collection
        //
        pub fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        // borrowNFT
        // Gets a reference to an NFT in the collection
        // so that the caller can read its metadata and call its methods
        //
        pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT {
            return (&self.ownedNFTs[id] as &NonFungibleToken.NFT?)!
        }

        // borrowTopJockNFT
        // Gets a reference to an NFT in the collection as a TopJock,
        // exposing all of its fields (including the typeID & rarityID).
        // This is safe as there are no functions that can be called on the TopJock.
        //
        pub fun borrowTopJockNFT(id: UInt64): &TopJockNFT.NFT? {
            if self.ownedNFTs[id] != nil {
                let ref = (&self.ownedNFTs[id] as auth &NonFungibleToken.NFT?)!
                return ref as! &TopJockNFT.NFT
            } else {
                return nil
            }
        }

        pub fun borrowViewResolver(id: UInt64): &AnyResource{MetadataViews.Resolver} {
            let nft = (&self.ownedNFTs[id] as auth &NonFungibleToken.NFT?)!
            let topjock = nft as! &TopJockNFT.NFT
            return topjock as &AnyResource{MetadataViews.Resolver}
        }

        // destructor
        destroy() {
            destroy self.ownedNFTs
        }

        // initializer
        //
        init () {
            self.ownedNFTs <- {}
        }
    }

    // createEmptyCollection
    // public function that anyone can call to create a new empty collection
    //
    pub fun createEmptyCollection(): @NonFungibleToken.Collection {
        return <- create Collection()
    }

    // NFTMinter
    // Resource that an admin or something similar would own to be
    // able to mint new NFTs
    //
    pub resource NFTMinter {

        // mintNFT
        // Mints a new NFT with a new ID
        // and deposit it in the recipients collection using their collection reference
        //
        pub fun mintNFT(
            recipient: &{NonFungibleToken.CollectionPublic},
            kind: Kind,
            rarity: Rarity,
            ipfsHash: String
        ) {
            // deposit it in the recipient's account using their reference
            recipient.deposit(token: <-create TopJockNFT.NFT(id: TopJockNFT.totalSupply, kind: kind, rarity: rarity, ipfsHash: ipfsHash))

            emit Minted(
                id: TopJockNFT.totalSupply,
                kind: kind.rawValue,
                rarity: rarity.rawValue,
            )

            TopJockNFT.totalSupply = TopJockNFT.totalSupply + (1 as UInt64)
        }

        // Update NFT images for new type
        pub fun addNewImagesForKind(from: AuthAccount, newImages: {Kind: {Rarity: String}}) {
            let kindValue = TopJockNFT.images.containsKey(newImages.keys[0])
            if(!kindValue) {
                TopJockNFT.images.insert(key: newImages.keys[0], newImages.values[0])
                emit ImagesAddedForNewKind(
                    kind: newImages.keys[0].rawValue,
                )
            } else {
                panic("No Rugs... Can't update existing NFT images.")
            }
        }
    }

    // fetch
    // Get a reference to a TopJockNFT from an account's Collection, if available.
    // If an account does not have a TopJockNFT.Collection, panic.
    // If it has a collection but does not contain the itemID, return nil.
    // If it has a collection and that collection contains the itemID, return a reference to that.
    //
    pub fun fetch(_ from: Address, itemID: UInt64): &TopJockNFT.NFT? {
        let collection = getAccount(from)
            .getCapability(TopJockNFT.CollectionPublicPath)!
            .borrow<&TopJockNFT.Collection{TopJockNFT.TopJockNFTCollectionPublic}>()
            ?? panic("Couldn't get collection")
        // We trust TopJockNFT.Collection.borowTopJockNFT to get the correct itemID
        // (it checks it before returning it).
        return collection.borrowTopJockNFT(id: itemID)
    }

    // initializer
    //
    init() {
        // set rarity price mapping
        self.itemRarityPriceMap = {
            Rarity.diamond: 125.0,
            Rarity.platinum: 25.0,
            Rarity.gold: 5.0,
            Rarity.silver: 1.0
        }

        self.images = {
            Kind.football: {
                Rarity.diamond: "bafybeibuqzhuoj6ychlckjn6cgfb5zfurggs2x7pvvzjtdcmvizu2fg6ga",
                Rarity.platinum: "bafybeihbminj62owneu3fjhtqm7ghs7q2rastna6srqtysqmjcsicmn7oa",
                Rarity.gold: "bafybeiaoja3gyoot4f5yxs4b7tucgaoj3kutu7sxupacddxeibod5hkw7m",
                Rarity.silver: "bafybeid73gt3qduwn2hhyy4wzhsvt6ahzmutiwosfd3f6t5el6yjqqxd3u"
            },
            Kind.basketball: {
                Rarity.diamond: "bafybeigu4ihzm7ujgpjfn24zut6ldrn7buzwqem27ncqupdovm3uv4h4oy",
                Rarity.platinum: "bafybeih6eaczohx3ibv22bh2fsdalc46qaqty6qapums6zhelxet2gfc24",
                Rarity.gold: "bafybeifbhcez3v5dj5qgndrx73twqleajz7r2mog4exd7abs3aof7w3hhe",
                Rarity.silver: "bafybeid2r5q3vfrsluv7iaelqobkihfopw5t4sv4z2llxsoe3xqfynl73u"
            },
            Kind.baseball: {
                Rarity.diamond: "bafybeialhf5ga6owaygebp6xt4vdybc7aowatrscwlwmxd444fvwyhcskq",
                Rarity.platinum: "bafybeihjy4rcbvnw6bcz3zbirq5u454aagnyzjhlrffgkc25wgdcw4csoe",
                Rarity.gold: "bafybeidbua4rigbcpwutpkqvd7spppvxemwn6o2ifhq6xam4sqlngzrfiq",
                Rarity.silver: "bafybeigdrwjq4kge3bym2rbnek2olibdt5uvdbtnuwto36jb36cr3c4p5y"
            },
            Kind.soccer: {
                Rarity.diamond: "bafybeidjalsqnhj2jnisxucv6chlrfwtcrqyu2n6lpx3zpuuv2o3d3nwce",
                Rarity.platinum: "bafybeiaeixpd4htnngycs7ebktdt6crztvhyiu2js4nwvuot35gzvszchi",
                Rarity.gold: "bafybeihfcumxiobjullha23ov77wgd5cv5uqrebkik6y33ctr5tkt4eh2e",
                Rarity.silver: "bafybeigdi6ableh5mvvrqdil233ucxip7cm3z4kpnpxhutfdncwhyl22my"
            },
            Kind.tennis: {
                Rarity.diamond: "bafybeic55lpwfvucmgibbvaury3rpeoxmcgyqra3vdhjwp74wqzj6oqvpq",
                Rarity.platinum: "bafybeic55lpwfvucmgibbvaury3rpeoxmcgyqra3vdhjwp74wqzj6oqvpq",
                Rarity.gold: "bafybeiepqu75oknv2vertl5nbq7gqyac5tbpekqcfy73lyk2rcjgz7irpu",
                Rarity.silver: "bafybeic5ehqovuhix4lyspxfawlegkrkp6aaloszyscmjvmjzsbxqm6s2i"
            }
        }

        // Set our named paths
        self.CollectionStoragePath = /storage/TopJockNFTCollectionV10
        self.CollectionPublicPath = /public/TopJockNFTCollectionV10
        self.MinterStoragePath = /storage/TopJockNFTMinterV10

        // Initialize the total supply
        self.totalSupply = 0

        // Create a Minter resource and save it to storage
        let minter <- create NFTMinter()
        self.account.save(<-minter, to: self.MinterStoragePath)

        emit ContractInitialized()
    }
}
