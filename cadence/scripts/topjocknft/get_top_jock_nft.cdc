import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import MetadataViews from "../../contracts/MetadataViews.cdc"
import TopJockNFT from "../../contracts/TopJockNFT.cdc"

pub struct TopJock {
    pub let name: String
    pub let description: String
    pub let thumbnail: String

    pub let itemID: UInt64
    pub let resourceID: UInt64
    pub let kind: TopJockNFT.Kind
    pub let rarity: TopJockNFT.Rarity
    pub let ipfsHash: String
    pub let owner: Address

    init(
        name: String,
        description: String,
        thumbnail: String,
        itemID: UInt64,
        resourceID: UInt64,
        kind: TopJockNFT.Kind,
        rarity: TopJockNFT.Rarity,
        owner: Address,
        ipfsHash: String
    ) {
        self.name = name
        self.description = description
        self.thumbnail = thumbnail
        self.ipfsHash = ipfsHash
        self.itemID = itemID
        self.resourceID = resourceID
        self.kind = kind
        self.rarity = rarity
        self.owner = owner
    }
}

pub fun dwebURL(_ file: MetadataViews.IPFSFile): String {
    var url = "https://"
        .concat(file.cid)
        .concat(".ipfs.dweb.link/")

    if let path = file.path {
        return url.concat(path)
    }

    return url
}

pub fun main(address: Address, itemID: UInt64): TopJock? {
    if let collection = getAccount(address).getCapability<&TopJockNFT.Collection{NonFungibleToken.CollectionPublic, TopJockNFT.TopJockNFTCollectionPublic}>(TopJockNFT.CollectionPublicPath).borrow() {

        if let item = collection.borrowTopJockNFT(id: itemID) {

            if let view = item.resolveView(Type<MetadataViews.Display>()) {

                let display = view as! MetadataViews.Display

                let owner: Address = item.owner!.address!

                let ipfsThumbnail = display.thumbnail as! MetadataViews.IPFSFile

                return TopJock(
                    name: display.name,
                    description: display.description,
                    thumbnail: dwebURL(ipfsThumbnail),
                    itemID: itemID,
                    resourceID: item.uuid,
                    kind: item.kind,
                    rarity: item.rarity,
                    owner: address,
                    ipfsHash: item.ipfsHash
                )
            }
        }
    }

    return nil
}
