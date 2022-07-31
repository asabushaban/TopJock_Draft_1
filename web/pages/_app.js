import PropTypes from "prop-types"
import AdminLogInDialog from "src/components/AdminLogInDialog"
import AppContainer from "src/components/AppContainer"
import {TransactionsContextProvider} from "src/components/Transactions/TransactionsContext"
import {AppContextProvider} from "src/contexts/AppContext"
import "styles/fonts.css"
import "styles/globals.css"
import {SWRConfig} from "swr"
import Router from "next/router"
import analytics from "src/global/analytics"

Router.events.on("routeChangeComplete", () => analytics.page())
export default function MyApp({Component, pageProps}) {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Orbitron&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <SWRConfig value={{provider: () => new Map()}}>
        <TransactionsContextProvider>
          <AppContextProvider>
            <AppContainer>
              <Component {...pageProps} />
              <AdminLogInDialog />
            </AppContainer>
          </AppContextProvider>
        </TransactionsContextProvider>
      </SWRConfig>
    </div>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
}
