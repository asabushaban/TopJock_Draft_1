import NonFungibleToken from "../../contracts/NonFungibleToken.cdc"
import TopJockNFT from "../../contracts/TopJockNFT.cdc"

// This transction uses the NFTMinter resource to mint a new NFT.
//
// It must be run with the account that has the minter resource
// stored at path /storage/NFTMinter.

transaction(recipient: Address, kind: UInt8, rarity: UInt8, ipfsHash:String) {

    // local variable for storing the minter reference
    let minter: &TopJockNFT.NFTMinter

    prepare(signer: AuthAccount) {

        // borrow a reference to the NFTMinter resource in storage
        self.minter = signer.borrow<&TopJockNFT.NFTMinter>(from: TopJockNFT.MinterStoragePath)
            ?? panic("Could not borrow a reference to the NFT minter")
    }

    execute {
        // get the public account object for the recipient
        let recipient = getAccount(recipient)

        // borrow the recipient's public NFT collection reference
        let receiver = recipient
            .getCapability(TopJockNFT.CollectionPublicPath)!
            .borrow<&{NonFungibleToken.CollectionPublic}>()
            ?? panic("Could not get receiver reference to the NFT Collection")

        let kindValue = TopJockNFT.Kind(rawValue: kind) ?? panic("invalid kind")
        let rarityValue = TopJockNFT.Rarity(rawValue: rarity) ?? panic("invalid rarity")

        // mint the NFT and deposit it to the recipient's collection
        self.minter.mintNFT(
            recipient: receiver,
            kind: kindValue,
            rarity: rarityValue,
            ipfsHash:ipfsHash
        )
    }
}
