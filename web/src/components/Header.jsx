import Link from "next/link"
import {useRouter} from "next/router"
import HeaderDropdown from "src/components/HeaderDropdown"
import HeaderFLOWBalance from "src/components/HeaderFLOWBalance"
import HeaderLink from "src/components/HeaderLink"
import {paths} from "src/global/constants"
import useAppContext from "src/hooks/useAppContext"
import useLogin from "src/hooks/useLogin"
import HeaderMessage from "./HeaderMessage"
import TransactionsIndicator from "./Transactions"

export default function Header() {
  const {currentUser} = useAppContext()
  const router = useRouter()
  const logIn = useLogin()
  const isAdminPath = router.pathname === paths.adminMint

  console.log("router", router)
  console.log("router", paths)

  return (
    <header className="bg-black border-b border-gray-200 z-2">
      <HeaderMessage />
      <div className="flex justify-between py-4 main-container max-w-2">
        <Link href={paths.root} passHref>
          <a className="flex items-center hover:opacity-80">
            <div className="flex w-12 sm:w-auto">
              <img
                src="/images/kitty-items-logo.svg"
                alt="Kitty Items"
                width="60"
                height="60"
              />
            </div>
            <div className="ml-2 d-flex flex-column">
              <div className="text-sm font-bold sm:text-2xl lg:text-3xl sm:ml-3 text-white">
                TopJockNFT
              </div>
              <div className="text-sm sm:ml-3 text-white">
                TopJockNFT Sample App
              </div>
            </div>
          </a>
        </Link>
        <div className="flex items-center">
          {!isAdminPath && (
            <>
              <div className="mr-2 md:mr-4">
                <HeaderLink href={paths.root}>Store</HeaderLink>
                <HeaderLink href={paths.marketplace}>Marketplace</HeaderLink>
              </div>
              {!!currentUser && (
                <div className="hidden mr-2 md:flex">
                  <HeaderFLOWBalance />
                </div>
              )}
              {currentUser ? (
                <HeaderDropdown />
              ) : (
                <button
                  onClick={logIn}
                  className="mr-2 text-sm text-white sm:text-lg md:text-xl"
                >
                  Log In
                </button>
              )}
            </>
          )}
          <TransactionsIndicator />
        </div>
      </div>
    </header>
  )
}
