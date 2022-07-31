import HomeEmptyMessage from "src/components/HomeEmptyMessage"
import LatestMarketplaceItems from "src/components/LatestMarketplaceItems"
import LatestStoreItems from "src/components/LatestStoreItems"
import PageTitle from "src/components/PageTitle"
import useApiListings from "src/hooks/useApiListings"
import HomePage from "src/components/Home"

export default function Home() {
  const {listings, isLoading} = useApiListings()

  return (
    <div>
      <PageTitle>Store</PageTitle>
      <main>
        {!isLoading &&
          (listings && listings.length > 0 ? (
            <>
              <HomePage />
              <LatestStoreItems items={listings} />
              <LatestMarketplaceItems items={listings} />
            </>
          ) : (
            <HomePage />
          ))}
      </main>
    </div>
  )
}
