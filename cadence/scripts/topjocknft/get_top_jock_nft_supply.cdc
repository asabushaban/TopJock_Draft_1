import TopJockNFT from "../../contracts/TopJockNFT.cdc"

// This scripts returns the number of TopJockNFT currently in existence.

pub fun main(): UInt64 {
    return TopJockNFT.totalSupply
}
