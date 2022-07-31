import * as fcl from "@onflow/fcl"
import publicConfig from "src/global/publicConfig"

export const EVENT_ITEM_MINTED = "TopJockNFT.Minted"
export const EVENT_TOP_JOCK_DEPOSIT = "TopJockNFT.Deposit"

export const EVENT_LISTING_AVAILABLE = "NFTStorefront.ListingAvailable"
export const EVENT_LISTING_COMPLETED = "NFTStorefront.ListingCompleted"

export const getTopJockNFTEventByType = (events, type) => {
  return events.find(
    event =>
      event.type ===
      `A.${fcl.sansPrefix(publicConfig.contractTopJockNFT)}.${type}`
  )
}

export const getStorefrontEventByType = (events, type) => {
  return events.find(
    event =>
      event.type ===
      `A.${fcl.sansPrefix(publicConfig.contractNftStorefront)}.${type}`
  )
}
