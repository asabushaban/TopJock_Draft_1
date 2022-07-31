import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import TopJockNFT from "../../contracts/TopJockNFT.cdc"

// This script returns the size of an account's TopJockNFT collection.

pub fun main(address: Address): Int {
    let account = getAccount(address)

    let collectionRef = account.getCapability(TopJockNFT.CollectionPublicPath)!
        .borrow<&{NonFungibleToken.CollectionPublic}>()
        ?? panic("Could not borrow capability from public collection")

    return collectionRef.getIDs().length
}
