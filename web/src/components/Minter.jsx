import {useState, useEffect} from "react"
import Button from "src/components/Button"
import useMintAndList from "src/hooks/useMintAndList"
import MinterLoader from "./MinterLoader"
import RarityScale from "./RarityScale"
import TransactionLoading from "./TransactionLoading"
import {create} from "ipfs-http-client"

const client = create("http://ipfs.infura.io:5001/api/v0")
// const added = await client.add(file);
// const hash = added.path;

export default function Minter() {
  const [{isLoading, transactionStatus}, mint] = useMintAndList()
  const [file, setFile] = useState("")
  const [type, setType] = useState("")

  const createHash = async selectedFile => {
    const added = await client.add(selectedFile)
    const hash = added.path
    setFile(hash)
    console.log("hellooooooos", file)
  }

  const executeMint = () => {
    mint(file, type)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <MinterLoader isLoading={isLoading} />

      <div className="flex flex-col pr-4 mt-14 lg:mt-24 lg:pt-20 lg:pl-14">
        <h1 className="mb-10 text-5xl text-gray-darkest">Mint a New Item</h1>
        <RarityScale />

        {isLoading ? (
          <TransactionLoading status={transactionStatus} />
        ) : (
          <>
            <Button
              onClick={executeMint}
              disabled={isLoading}
              roundedFull={true}
            >
              Mint Item
            </Button>
            <input type="file" onChange={e => createHash(e.target.files[0])} />
            <label for="pet-select">Choose a pet:</label>
            <select
              name="type"
              id="type-select"
              onChange={e => setType(e.target.value)}
              value={type}
            >
              <option value="">--Please choose an option--</option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="baseball">Baseball</option>
              <option value="tennis">Tennis</option>
              <option value="soccer">Soccer</option>
            </select>
          </>
        )}
      </div>
    </div>
  )
}
