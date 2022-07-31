import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import * as fs from "fs"
import * as path from "path"
import {FlowService} from "./flow"

const nonFungibleTokenPath = '"../../contracts/NonFungibleToken.cdc"'
const metadataViewsPath = '"../../contracts/MetadataViews.cdc"'
const topJockNFTPath = '"../../contracts/TopJockNFT.cdc"'
const fungibleTokenPath = '"../../contracts/FungibleToken.cdc"'
const flowTokenPath = '"../../contracts/FlowToken.cdc"'
const storefrontPath = '"../../contracts/NFTStorefront.cdc"'

enum Kind {
  football = 0,
  baskeball,
  baseball,
  soccer,
  tennis,
}

enum Rarity {
  Silver = 0,
  Gold,
  Platinum,
  Diamond,
}

const randomKind = () => {
  const values = Object.keys(Kind)
    .map(n => Number.parseInt(n))
    .filter(n => !Number.isNaN(n))

  const index = Math.floor(Math.random() * values.length)

  return values[index]
}

const ITEM_RARITY_PROBABILITIES = {
  [Rarity.Diamond]: 10,
  [Rarity.Platinum]: 20,
  [Rarity.Gold]: 30,
  [Rarity.Silver]: 40,
}

const randomRarity = () => {
  const rarities = Object.keys(ITEM_RARITY_PROBABILITIES)
  const rarityProbabilities = rarities.flatMap(rarity =>
    Array(ITEM_RARITY_PROBABILITIES[rarity]).fill(rarity)
  )

  const index = Math.floor(Math.random() * rarityProbabilities.length)

  return rarityProbabilities[index]
}

class TopJockNFTService {
  constructor(
    private readonly flowService: FlowService,
    private readonly nonFungibleTokenAddress: string,
    private readonly metadataViewsAddress: string,
    private readonly topJockNFTAddress: string,
    private readonly fungibleTokenAddress: string,
    private readonly flowTokenAddress: string,
    private readonly storefrontAddress: string
  ) {}

  setupAccount = async () => {
    const authorization = this.flowService.authorizeMinter()

    const transaction = fs
      .readFileSync(
        path.join(
          __dirname,
          `../../../cadence/transactions/topjocknft/setup_account.cdc`
        ),
        "utf8"
      )
      .replace(
        nonFungibleTokenPath,
        fcl.withPrefix(this.nonFungibleTokenAddress)
      )
      .replace(topJockNFTPath, fcl.withPrefix(this.topJockNFTAddress))

    return this.flowService.sendTx({
      transaction,
      args: [],
      authorizations: [authorization],
      payer: authorization,
      proposer: authorization,
    })
  }

  mint = async (recipient: string, type: string, image: string) => {
    const authorization = this.flowService.authorizeMinter()

    const kind = Kind[type]
    const rarity = randomRarity()
    console.log(kind)
    const transaction = fs
      .readFileSync(
        path.join(
          __dirname,
          `../../../cadence/transactions/topjocknft/mint_top_jock_nft.cdc`
        ),
        "utf8"
      )
      .replace(
        nonFungibleTokenPath,
        fcl.withPrefix(this.nonFungibleTokenAddress)
      )
      .replace(topJockNFTPath, fcl.withPrefix(this.topJockNFTAddress))

    return this.flowService.sendTx({
      transaction,
      args: [
        fcl.arg(recipient, t.Address),
        fcl.arg(Number(kind), t.UInt8),
        fcl.arg(image, t.String),
        fcl.arg(Number(rarity), t.UInt8),
      ],
      authorizations: [authorization],
      payer: authorization,
      proposer: authorization,
      skipSeal: true,
    })
  }

  mintAndList = async (recipient: string, type: string, image: string) => {
    const authorization = this.flowService.authorizeMinter()

    // const kind = randomKind()
    const rarity = randomRarity()
    const kind = Kind[type]

    console.log("hit------- services", kind)
    const transaction = fs
      .readFileSync(
        path.join(
          __dirname,
          `../../../cadence/transactions/topjocknft/mint_and_list_top_jock_nft.cdc`
        ),
        "utf8"
      )
      .replace(
        nonFungibleTokenPath,
        fcl.withPrefix(this.nonFungibleTokenAddress)
      )
      .replace(topJockNFTPath, fcl.withPrefix(this.topJockNFTAddress))
      .replace(fungibleTokenPath, fcl.withPrefix(this.fungibleTokenAddress))
      .replace(flowTokenPath, fcl.withPrefix(this.flowTokenAddress))
      .replace(storefrontPath, fcl.withPrefix(this.storefrontAddress))

    return this.flowService.sendTx({
      transaction,
      args: [
        fcl.arg(recipient, t.Address),
        fcl.arg(Number(kind), t.UInt8),
        fcl.arg(Number(rarity), t.UInt8),
        fcl.arg(image, t.String),
      ],
      authorizations: [authorization],
      payer: authorization,
      proposer: authorization,
      skipSeal: true,
    })
  }

  transfer = async (recipient: string, itemID: number) => {
    const authorization = this.flowService.authorizeMinter()

    const transaction = fs
      .readFileSync(
        path.join(
          __dirname,
          `../../../cadence/transactions/topjocknft/transfer_top_jock_nft.cdc`
        ),
        "utf8"
      )
      .replace(
        nonFungibleTokenPath,
        fcl.withPrefix(this.nonFungibleTokenAddress)
      )
      .replace(topJockNFTPath, fcl.withPrefix(this.topJockNFTAddress))

    return this.flowService.sendTx({
      transaction,
      args: [fcl.arg(recipient, t.Address), fcl.arg(itemID, t.UInt64)],
      authorizations: [authorization],
      payer: authorization,
      proposer: authorization,
    })
  }

  getCollectionIds = async (account: string): Promise<number[]> => {
    const script = fs
      .readFileSync(
        path.join(
          __dirname,
          `../../../cadence/scripts/topjocknft/get_collection_ids.cdc`
        ),
        "utf8"
      )
      .replace(
        nonFungibleTokenPath,
        fcl.withPrefix(this.nonFungibleTokenAddress)
      )
      .replace(topJockNFTPath, fcl.withPrefix(this.topJockNFTAddress))

    return this.flowService.executeScript<number[]>({
      script,
      args: [fcl.arg(account, t.Address)],
    })
  }

  getTopJock = async (itemID: number, address: string): Promise<number> => {
    const script = fs
      .readFileSync(
        path.join(
          __dirname,
          `../../../cadence/scripts/topjocknft/get_top_jock_nft.cdc`
        ),
        "utf8"
      )
      .replace(
        nonFungibleTokenPath,
        fcl.withPrefix(this.nonFungibleTokenAddress)
      )
      .replace(metadataViewsPath, fcl.withPrefix(this.metadataViewsAddress))
      .replace(topJockNFTPath, fcl.withPrefix(this.topJockNFTAddress))

    return this.flowService.executeScript<number>({
      script,
      args: [fcl.arg(address, t.Address), fcl.arg(itemID, t.UInt64)],
    })
  }

  getSupply = async (): Promise<number> => {
    const script = fs
      .readFileSync(
        path.join(
          __dirname,
          `../../../cadence/scripts/topjocknft/get_top_jock_nft_supply.cdc`
        ),
        "utf8"
      )
      .replace(topJockNFTPath, fcl.withPrefix(this.topJockNFTAddress))

    return this.flowService.executeScript<number>({script, args: []})
  }
}

export {TopJockNFTService}
