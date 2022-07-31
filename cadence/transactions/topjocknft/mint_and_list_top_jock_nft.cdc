import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import TopJockNFT from "../../contracts/TopJockNFT.cdc"
import FungibleToken from "../../contracts/FungibleToken.cdc"
import FlowToken from "../../contracts/FlowToken.cdc"
import NFTStorefront from "../../contracts/NFTStorefront.cdc"

// This transction uses the NFTMinter resource to mint a new NFT.

transaction(recipient: Address, kind: UInt8, rarity: UInt8, ipfsHash:String) {

    // local variable for storing the minter reference
    let minter: &TopJockNFT.NFTMinter
    let flowReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
    let topJockProvider: Capability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>
    let storefront: &NFTStorefront.Storefront

    prepare(signer: AuthAccount) {

        // borrow a reference to the NFTMinter resource in storage
        self.minter = signer.borrow<&TopJockNFT.NFTMinter>(from: TopJockNFT.MinterStoragePath)
            ?? panic("Could not borrow a reference to the NFT minter")

         // We need a provider capability, but one is not provided by default so we create one if needed.
        let topJockNFTCollectionProviderPrivatePath = /private/topJockNFTCollectionProviderV14

        self.flowReceiver = signer.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)!

        assert(self.flowReceiver.borrow() != nil, message: "Missing or mis-typed FLOW receiver")

        if !signer.getCapability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath)!.check() {
            signer.link<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath, target: TopJockNFT.CollectionStoragePath)
        }

        self.topJockProvider = signer.getCapability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath)!

        assert(self.topJockProvider.borrow() != nil, message: "Missing or mis-typed TopJockNFT.Collection provider")

        self.storefront = signer.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath)
            ?? panic("Missing or mis-typed NFTStorefront Storefront")
    }

    execute {
        // get the public account object for the recipient
        let recipient = getAccount(recipient)

        // borrow the recipient's public NFT collection reference
        let receiver = recipient
            .getCapability(TopJockNFT.CollectionPublicPath)!
            .borrow<&{NonFungibleToken.CollectionPublic}>()
            ?? panic("Could not get receiver reference to the NFT Collection")

        // mint the NFT and deposit it to the recipient's collection
        let kindValue = TopJockNFT.Kind(rawValue: kind) ?? panic("invalid kind")
        let rarityValue = TopJockNFT.Rarity(rawValue: rarity) ?? panic("invalid rarity")

        // mint the NFT and deposit it to the recipient's collection
        self.minter.mintNFT(
            recipient: receiver,
            kind: kindValue,
            rarity: rarityValue,
            ipfsHash: ipfsHash
        )

        let saleCut = NFTStorefront.SaleCut(
            receiver: self.flowReceiver,
            amount: TopJockNFT.getItemPrice(rarity: rarityValue)
        )

        self.storefront.createListing(
            nftProviderCapability: self.topJockProvider,
            nftType: Type<@TopJockNFT.NFT>(),
            nftID: TopJockNFT.totalSupply - 1,
            salePaymentVaultType: Type<@FlowToken.Vault>(),
            saleCuts: [saleCut]
        )
    }
}
