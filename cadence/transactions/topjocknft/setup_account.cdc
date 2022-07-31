import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import TopJockNFT from "../../contracts/TopJockNFT.cdc"
import MetadataViews from "../../contracts/MetadataViews.cdc"

// This transaction configures an account to hold TopJockNFT.

transaction {
    prepare(signer: AuthAccount) {
        // if the account doesn't already have a collection
        if signer.borrow<&TopJockNFT.Collection>(from: TopJockNFT.CollectionStoragePath) == nil {

            // create a new empty collection
            let collection <- TopJockNFT.createEmptyCollection()

            // save it to the account
            signer.save(<-collection, to: TopJockNFT.CollectionStoragePath)

            // create a public capability for the collection
            signer.link<&TopJockNFT.Collection{NonFungibleToken.CollectionPublic, TopJockNFT.TopJockNFTCollectionPublic, MetadataViews.ResolverCollection}>(TopJockNFT.CollectionPublicPath, target: TopJockNFT.CollectionStoragePath)
        }
    }
}
