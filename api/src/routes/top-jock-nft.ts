/**
 * Top Jock NFT Router
 *
 * Router class that defines API REST endpoints used for minting and moving Top Jock NFT.
 * Endpoints call top-jock-nft service with request data.
 *
 */
import express, {Request, Response, Router} from "express"
import {body} from "express-validator"
import {validateRequest} from "../middlewares/validate-request"
import {TopJockNFTService} from "../services/top-jock-nft"

function initTopJockNFTRouter(topJockNFTService: TopJockNFTService): Router {
  const router = express.Router()

  router.post(
    "/top-jock-nft/mint",
    [body("recipient").exists()],
    validateRequest,
    async (req: Request, res: Response) => {
      const {recipient, image, type} = req.body
      const tx = await topJockNFTService.mint(recipient, type, image)
      return res.send({
        transaction: tx,
      })
    }
  )

  router.post(
    "/top-jock-nft/mint-and-list",
    [body("recipient").exists()],
    validateRequest,
    async (req: Request, res: Response) => {
      const {recipient, image, type} = req.body
      console.log("hit+++", req.body)
      const tx = await topJockNFTService.mintAndList(recipient, type, image)
      return res.send({
        transaction: tx,
      })
    }
  )

  router.post("/top-jock-nft/setup", async (req: Request, res: Response) => {
    const transaction = await topJockNFTService.setupAccount()
    return res.send({
      transaction,
    })
  })

  router.post(
    "/top-jock-nft/transfer",
    [body("recipient").exists(), body("itemID").isInt()],
    validateRequest,
    async (req: Request, res: Response) => {
      const {recipient, itemID} = req.body
      const tx = await topJockNFTService.transfer(recipient, itemID)
      return res.send({
        transaction: tx,
      })
    }
  )

  router.get(
    "/top-jock-nft/collection/:account",
    async (req: Request, res: Response) => {
      const collection = await topJockNFTService.getCollectionIds(
        req.params.account
      )
      return res.send({
        collection,
      })
    }
  )

  router.get(
    "/top-jock-nft/item/:address/:itemID",
    async (req: Request, res: Response) => {
      const item = await topJockNFTService.getTopJock(
        parseInt(req.params.itemID),
        req.params.address
      )
      return res.send({
        item,
      })
    }
  )

  router.get("/top-jock-nft/supply", async (req: Request, res: Response) => {
    const supply = await topJockNFTService.getSupply()
    return res.send({
      supply,
    })
  })

  return router
}

export default initTopJockNFTRouter
