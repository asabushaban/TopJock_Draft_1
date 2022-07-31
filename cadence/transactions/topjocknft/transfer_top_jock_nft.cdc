import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import TopJockNFT from "../../contracts/TopJockNFT.cdc"

// This transaction transfers a TopJockNFT from one account to another.

transaction(recipient: Address, withdrawID: UInt64) {
    prepare(signer: AuthAccount) {

        // get the recipients public account object
        let recipient = getAccount(recipient)

        // borrow a reference to the signer's NFT collection
        let collectionRef = signer.borrow<&TopJockNFT.Collection>(from: TopJockNFT.CollectionStoragePath)
            ?? panic("Could not borrow a reference to the owner's collection")

        // borrow a public reference to the receivers collection
        let depositRef = recipient.getCapability(TopJockNFT.CollectionPublicPath)!.borrow<&{NonFungibleToken.CollectionPublic}>()!

        // withdraw the NFT from the owner's collection
        let nft <- collectionRef.withdraw(withdrawID: withdrawID)

        // Deposit the NFT in the recipient's collection
        depositRef.deposit(token: <-nft)
    }
}
