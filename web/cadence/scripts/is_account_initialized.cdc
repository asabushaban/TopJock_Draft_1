import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNonFungibleToken
import TopJockNFT from 0xTopJockNFT
import NFTStorefront from 0xNFTStorefront

pub fun hasItems(_ address: Address): Bool {
  return getAccount(address)
    .getCapability<&TopJockNFT.Collection{NonFungibleToken.CollectionPublic, TopJockNFT.TopJockNFTCollectionPublic}>(TopJockNFT.CollectionPublicPath)
    .check()
}

pub fun hasStorefront(_ address: Address): Bool {
  return getAccount(address)
    .getCapability<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(NFTStorefront.StorefrontPublicPath)
    .check()
}

pub fun main(address: Address): {String: Bool} {
  let ret: {String: Bool} = {}
  ret["TopJockNFT"] = hasItems(address)
  ret["TopJockNFTMarket"] = hasStorefront(address)
  return ret
}
