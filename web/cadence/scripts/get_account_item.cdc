import NonFungibleToken from 0xNonFungibleToken
import MetadataViews from 0xMetadataViews
import TopJockNFT from 0xTopJockNFT

pub struct TopJock {
  pub let name: String
  pub let description: String
  pub let image: String

  pub let itemID: UInt64
  pub let resourceID: UInt64
  pub let kind: TopJockNFT.Kind
  pub let rarity: TopJockNFT.Rarity
  pub let ipfsHash: String
  pub let owner: Address

  init(
    name: String,
    description: String,
    image: String,
    itemID: UInt64,
    resourceID: UInt64,
    kind: TopJockNFT.Kind,
    rarity: TopJockNFT.Rarity,
    owner: Address,
      ipfsHash: String
  ) {
    self.name = name
    self.description = description
    self.image = image
self.ipfsHash = ipfsHash
    self.itemID = itemID
    self.resourceID = resourceID
    self.kind = kind
    self.rarity = rarity
    self.owner = owner
  }
}

pub fun fetch(address: Address, itemID: UInt64): TopJock? {
  if let collection = getAccount(address).getCapability<&TopJockNFT.Collection{NonFungibleToken.CollectionPublic, TopJockNFT.TopJockNFTCollectionPublic}>(TopJockNFT.CollectionPublicPath).borrow() {

    if let item = collection.borrowTopJockNFT(id: itemID) {

      if let view = item.resolveView(Type<MetadataViews.Display>()) {

        let display = view as! MetadataViews.Display

        let owner: Address = item.owner!.address!

        let ipfsThumbnail = display.thumbnail as! MetadataViews.IPFSFile

        return TopJock(
          name: display.name,
          description: display.description,
          image: item.imageCID(),
          itemID: itemID,
          resourceID: item.uuid,
          kind: item.kind,
          rarity: item.rarity,
          owner: address,
          ipfsHash: item.ipfsHash,
        )
      }
    }
  }

  return nil
}

pub fun main(keys: [String], addresses: [Address], ids: [UInt64]): {String: TopJock?} {
  let r: {String: TopJock?} = {}
  var i = 0
  while i < keys.length {
    let key = keys[i]
    let address = addresses[i]
    let id = ids[i]
    r[key] = fetch(address: address, itemID: id)
    i = i + 1
  }
  return r
}
