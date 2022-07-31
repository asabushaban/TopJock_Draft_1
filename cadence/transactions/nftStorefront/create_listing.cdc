import FungibleToken from "../../contracts/FungibleToken.cdc"
import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import FlowToken from "../../contracts/FlowToken.cdc"
import TopJockNFT from "../../contracts/TopJockNFT.cdc"
import NFTStorefront from "../../contracts/NFTStorefront.cdc"

pub fun getOrCreateStorefront(account: AuthAccount): &NFTStorefront.Storefront {
    if let storefrontRef = account.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) {
        return storefrontRef
    }

    let storefront <- NFTStorefront.createStorefront()

    let storefrontRef = &storefront as &NFTStorefront.Storefront

    account.save(<-storefront, to: NFTStorefront.StorefrontStoragePath)

    account.link<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(NFTStorefront.StorefrontPublicPath, target: NFTStorefront.StorefrontStoragePath)

    return storefrontRef
}

transaction(saleItemID: UInt64, saleItemPrice: UFix64) {

    let flowReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
    let topJockNFTProvider: Capability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>
    let storefront: &NFTStorefront.Storefront

    prepare(account: AuthAccount) {
        // We need a provider capability, but one is not provided by default so we create one if needed.
        let topJockNFTCollectionProviderPrivatePath = /private/topJockNFTCollectionProviderV12

        self.flowReceiver = account.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)!

        assert(self.flowReceiver.borrow() != nil, message: "Missing or mis-typed FLOW receiver")

        if !account.getCapability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath)!.check() {
            account.link<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath, target: TopJockNFT.CollectionStoragePath)
        }

        self.topJockNFTProvider = account.getCapability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath)!

        assert(self.topJockNFTProvider.borrow() != nil, message: "Missing or mis-typed TopJockNFT.Collection provider")

        self.storefront = getOrCreateStorefront(account: account)
    }

    execute {
        let saleCut = NFTStorefront.SaleCut(
            receiver: self.flowReceiver,
            amount: saleItemPrice
        )
        self.storefront.createListing(
            nftProviderCapability: self.topJockNFTProvider,
            nftType: Type<@TopJockNFT.NFT>(),
            nftID: saleItemID,
            salePaymentVaultType: Type<@FlowToken.Vault>(),
            saleCuts: [saleCut]
        )
    }
}




// pub fun getOrCreateStorefront(account: AuthAccount): &NFTStorefront.Storefront {
//     if let storefrontRef = account.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) {
//         return storefrontRef
//     }

//     let storefront <- NFTStorefront.createStorefront()

//     let storefrontRef = &storefront as &NFTStorefront.Storefront

//     account.save(<-storefront, to: NFTStorefront.StorefrontStoragePath)

//     account.link<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(NFTStorefront.StorefrontPublicPath, target: NFTStorefront.StorefrontStoragePath)

//     return storefrontRef
// }

// transaction(saleItemID: UInt64, saleItemPrice: UFix64) {

//     let flowReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
//     let topJockNFTProvider: Capability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>
//     let storefront: &NFTStorefront.Storefront

//     prepare(account: AuthAccount) {
//         // We need a provider capability, but one is not provided by default so we create one if needed.
//         let topJockNFTCollectionProviderPrivatePath = /private/topJockNFTCollectionProviderV14

//         self.flowReceiver = account.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)!

//         assert(self.flowReceiver.borrow() != nil, message: "Missing or mis-typed FLOW receiver")

//         if !account.getCapability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath)!.check() {
//             account.link<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath, target: TopJockNFT.CollectionStoragePath)
//         }

//         self.topJockNFTProvider = account.getCapability<&TopJockNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(topJockNFTCollectionProviderPrivatePath)!

//         assert(self.topJockNFTProvider.borrow() != nil, message: "Missing or mis-typed TopJockNFT.Collection provider")

//         self.storefront = getOrCreateStorefront(account: account)
//     }

//     execute {
//         let saleCut = NFTStorefront.SaleCut(
//             receiver: self.flowReceiver,
//             amount: saleItemPrice
//         )
//         self.storefront.createListing(
//             nftProviderCapability: self.topJockNFTProvider,
//             nftType: Type<@TopJockNFT.NFT>(),
//             nftID: saleItemID,
//             salePaymentVaultType: Type<@FlowToken.Vault>(),
//             saleCuts: [saleCut]
//         )
//     }
// }
