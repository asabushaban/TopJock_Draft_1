import NonFungibleToken from 0xNonFungibleToken
import TopJockNFT from 0xTopJockNFT

pub fun main(address: Address): [UInt64] {
  if let collection = getAccount(address).getCapability<&TopJockNFT.Collection{NonFungibleToken.CollectionPublic, TopJockNFT.TopJockNFTCollectionPublic}>(TopJockNFT.CollectionPublicPath).borrow() {
    return collection.getIDs()
  }

  return []
}
