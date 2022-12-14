import {json, urlencoded} from "body-parser"
import cors from "cors"
import express, {Request, Response} from "express"
import "express-async-errors"
import path from "path"
import initTopJockNFTRouter from "./routes/top-jock-nft"
import initStorefrontRouter from "./routes/storefront"
import {TopJockNFTService} from "./services/top-jock-nft"
import {StorefrontService} from "./services/storefront"

const V1 = "/v1/"

// Init all routes, setup middlewares and dependencies
const initApp = (
  topJockNFTService: TopJockNFTService,
  storefrontService: StorefrontService
) => {
  const app = express()

  app.use(cors())
  app.use(json())
  app.use(urlencoded({extended: false}))
  app.use(V1, initTopJockNFTRouter(topJockNFTService))
  app.use(V1, initStorefrontRouter(storefrontService))

  const serveReactApp = () => {
    app.use(express.static(path.resolve(__dirname, "../../web/out")))

    app.get("/profiles/:address", function (req, res) {
      res.sendFile(
        path.resolve(__dirname, "../../web/out/profiles/[address]/index.html")
      )
    })

    app.get("/profiles/:address/top-jock-nft/:id", function (req, res) {
      res.sendFile(
        path.resolve(
          __dirname,
          "../../web/out/profiles/[address]/top-jock-nft/[id]/index.html"
        )
      )
    })

    app.get("*", function (req, res) {
      res.sendFile(path.resolve(__dirname, "../../web/out/index.html"))
    })
  }

  if (process.env.IS_HEROKU) {
    // Serve React static site using Express when deployed to Heroku.
    serveReactApp()
  }

  app.all("*", async (req: Request, res: Response) => {
    return res.sendStatus(404)
  })

  return app
}

export default initApp
