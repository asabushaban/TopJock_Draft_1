import {useState} from "react"
import useAppContext from "src/hooks/useAppContext"
import Button from "./Button"
import Dialog from "./Dialog"
import TextInput from "./TextInput"

const PUBLIC_PASSWORD = "TopJockNFT"

export const LOGGED_IN_ADMIN_ADDRESS_KEY = "top_jock_nft_logged_in_admin_address"

export default function AdminLogInDialog() {
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const {showAdminLoginDialog, setShowAdminLoginDialog, logInAdmin} =
    useAppContext()

  const closeDialog = () => {
    setShowAdminLoginDialog(false)
    setPasswordError(false)
    setPassword("")
  }

  const onSubmit = e => {
    e.preventDefault()

    setPasswordError(false)

    if (password.toLowerCase() !== PUBLIC_PASSWORD.toLowerCase()) {
      setPasswordError(true)
      return
    }

    logInAdmin()

    setPassword("")
  }

  return (
    <div>
      <Dialog
        title="TopJockNFT"
        isOpen={showAdminLoginDialog}
        close={closeDialog}
      >
        <h1 className="text-3xl text-gray-darkest text-center mb-2">
          TopJock Admin
        </h1>
        <div className="text-center text-gray text-md mb-8">
          Enter administrator password (PSST... TopJockNFT)
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <TextInput
              value={password}
              type="password"
              label="Password"
              required={true}
              labelClasses="text-sm text-gray-darkest"
              onChange={setPassword}
            />
            <div className="text-red mt-2 text-sm">
              {passwordError && `That's an incorrect password. Try TopJockNFT.`}
            </div>
          </div>

          <Button type="submit" rounded={false}>
            Log In
          </Button>
        </form>
      </Dialog>
    </div>
  )
}
