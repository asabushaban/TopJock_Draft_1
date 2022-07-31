import FungibleToken from "../../contracts/FungibleToken.cdc"
import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import FlowToken from "../../contracts/FlowToken.cdc"
import TopJockNFT from "../../contracts/TopJockNFT.cdc"
import NFTStorefront from "../../contracts/NFTStorefront.cdc"

pub fun getOrCreateCollection(account: AuthAccount): &TopJockNFT.Collection{NonFungibleToken.Receiver} {
    if let collectionRef = account.borrow<&TopJockNFT.Collection>(from: TopJockNFT.CollectionStoragePath) {
        return collectionRef
    }

    // create a new empty collection
    let collection <- TopJockNFT.createEmptyCollection() as! @TopJockNFT.Collection

    let collectionRef = &collection as &TopJockNFT.Collection

    // save it to the account
    account.save(<-collection, to: TopJockNFT.CollectionStoragePath)

    // create a public capability for the collection
    account.link<&TopJockNFT.Collection{NonFungibleToken.CollectionPublic, TopJockNFT.TopJockNFTCollectionPublic}>(TopJockNFT.CollectionPublicPath, target: TopJockNFT.CollectionStoragePath)

    return collectionRef
}

transaction(listingResourceID: UInt64, storefrontAddress: Address) {

    let paymentVault: @FungibleToken.Vault
    let topJockNFTCollection: &TopJockNFT.Collection{NonFungibleToken.Receiver}
    let storefront: &NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}
    let listing: &NFTStorefront.Listing{NFTStorefront.ListingPublic}

    prepare(account: AuthAccount) {
        self.storefront = getAccount(storefrontAddress)
            .getCapability<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(
                NFTStorefront.StorefrontPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow Storefront from provided address")

        self.listing = self.storefront.borrowListing(listingResourceID: listingResourceID)
            ?? panic("No Listing with that ID in Storefront")

        let price = self.listing.getDetails().salePrice

        let mainFLOWVault = account.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
            ?? panic("Cannot borrow FLOW vault from account storage")

        self.paymentVault <- mainFLOWVault.withdraw(amount: price)

        self.topJockNFTCollection = getOrCreateCollection(account: account)
    }

    execute {
        let item <- self.listing.purchase(
            payment: <-self.paymentVault
        )

        self.topJockNFTCollection.deposit(token: <-item)

        self.storefront.cleanup(listingResourceID: listingResourceID)
    }
}
