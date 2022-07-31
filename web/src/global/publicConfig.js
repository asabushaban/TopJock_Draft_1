const appTitle = "TopJockNFT"

const isDev = process.env.NODE_ENV === "development"

const chainEnv = process.env.NEXT_PUBLIC_CHAIN_ENV
if (!chainEnv) throw new Error("Missing NEXT_PUBLIC_CHAIN_ENV")

const flowAccessApiUrl = process.env.NEXT_PUBLIC_FLOW_ACCESS_API_URL
if (!flowAccessApiUrl)
  throw new Error("Missing NEXT_PUBLIC_FLOW_ACCESS_API_URL")

const appUrl = process.env.NEXT_PUBLIC_APP_URL
if (!appUrl) throw new Error("Missing NEXT_PUBLIC_APP_URL")

const walletDiscovery = process.env.NEXT_PUBLIC_WALLET_DISCOVERY
if (!walletDiscovery) throw new Error("Missing NEXT_PUBLIC_WALLET_DISCOVERY")

const apiTopJockMint = process.env.NEXT_PUBLIC_API_TOP_JOCK_MINT
if (!apiTopJockMint)
  throw new Error("Missing NEXT_PUBLIC_API_TOP_JOCK_MINT")

const apiTopJockMintAndList =
  process.env.NEXT_PUBLIC_API_TOP_JOCK_MINT_AND_LIST
if (!apiTopJockMintAndList)
  throw new Error("Missing NEXT_PUBLIC_API_TOP_JOCK_MINT_AND_LIST")

const apiMarketItemsList = process.env.NEXT_PUBLIC_API_MARKET_ITEMS_LIST
if (!apiMarketItemsList)
  throw new Error("Missing NEXT_PUBLIC_API_MARKET_ITEMS_LIST")

const apiUrl = process.env.NEXT_PUBLIC_API_URL
if (!apiUrl) throw new Error("Missing NEXT_PUBLIC_API_URL")

const contractFungibleToken = process.env.NEXT_PUBLIC_CONTRACT_FUNGIBLE_TOKEN
if (!contractFungibleToken)
  throw new Error("Missing NEXT_PUBLIC_CONTRACT_FUNGIBLE_TOKEN")

const contractNonFungibleToken =
  process.env.NEXT_PUBLIC_CONTRACT_NON_FUNGIBLE_TOKEN
if (!contractNonFungibleToken)
  throw new Error("Missing NEXT_PUBLIC_CONTRACT_NON_FUNGIBLE_TOKEN")

const contractMetadataViews = process.env.NEXT_PUBLIC_CONTRACT_METADATA_VIEWS
if (!contractMetadataViews)
  throw new Error("Missing NEXT_PUBLIC_CONTRACT_METADATA_VIEWS")

const flowAddress = process.env.NEXT_PUBLIC_FLOW_ADDRESS
if (!flowAddress) throw new Error("Missing NEXT_PUBLIC_FLOW_ADDRESS")

const avatarUrl = process.env.NEXT_PUBLIC_AVATAR_URL
if (!avatarUrl) throw new Error("Missing NEXT_PUBLIC_AVATAR_URL")

const contractTopJockNFT = process.env.NEXT_PUBLIC_CONTRACT_TOP_JOCK_NFT
if (!contractTopJockNFT)
  throw new Error("Missing NEXT_PUBLIC_CONTRACT_TOP_JOCK_NFT")

const contractNftStorefront = process.env.NEXT_PUBLIC_CONTRACT_NFT_STOREFRONT
if (!contractNftStorefront)
  throw new Error("Missing NEXT_PUBLIC_CONTRACT_NFT_STOREFRONT")

const contractFlowToken = process.env.NEXT_PUBLIC_CONTRACT_FLOW_TOKEN
if (!contractFlowToken)
  throw new Error("Missing NEXT_PUBLIC_CONTRACT_FLOW_TOKEN")

const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID
const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN

const publicConfig = {
  appTitle,
  isDev,
  faucetAddress: process.env.NEXT_PUBLIC_FAUCET_ADDRESS,
  chainEnv,
  flowAccessApiUrl,
  appUrl,
  walletDiscovery,
  apiTopJockMint,
  apiMarketItemsList,
  apiTopJockMintAndList,
  apiUrl,
  flowAddress,
  avatarUrl,
  contractFungibleToken,
  contractNonFungibleToken,
  contractMetadataViews,
  contractFlowToken,
  contractTopJockNFT,
  contractNftStorefront,
  gaTrackingId,
  mixpanelToken,
}

export default publicConfig
