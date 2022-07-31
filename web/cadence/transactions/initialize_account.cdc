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

transaction {
  prepare(acct: AuthAccount) {
    if !hasItems(acct.address) {
      if acct.borrow<&TopJockNFT.Collection>(from: TopJockNFT.CollectionStoragePath) == nil {
        acct.save(<-TopJockNFT.createEmptyCollection(), to: TopJockNFT.CollectionStoragePath)
      }
      acct.unlink(TopJockNFT.CollectionPublicPath)
      acct.link<&TopJockNFT.Collection{NonFungibleToken.CollectionPublic, TopJockNFT.TopJockNFTCollectionPublic}>(TopJockNFT.CollectionPublicPath, target: TopJockNFT.CollectionStoragePath)
    }

    if !hasStorefront(acct.address) {
      if acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) == nil {
        acct.save(<-NFTStorefront.createStorefront(), to: NFTStorefront.StorefrontStoragePath)
      }
      acct.unlink(NFTStorefront.StorefrontPublicPath)
      acct.link<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(NFTStorefront.StorefrontPublicPath, target: NFTStorefront.StorefrontStoragePath)
    }
  }
}
