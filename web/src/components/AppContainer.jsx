import Head from "next/head"
import PropTypes from "prop-types"
import Header from "src/components/Header"
import {BASE_HTML_TITLE} from "src/global/constants"
import "src/global/fclConfig"
import FlashMessage from "./FlashMessage"

export default function AppContainer({children}) {
  return (
    <div>
      <Head>
        <title>{BASE_HTML_TITLE}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Get motivated to develop for web3 and build an NFT marketplace!"
        />
      </Head>
      <Header />
      <FlashMessage />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.node,
}
