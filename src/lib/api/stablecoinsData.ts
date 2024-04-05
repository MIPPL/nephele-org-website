import { COINGECKO_API_BASE_URL, COINGECKO_API_URL_PARAMS } from "../constants"

export async function fetchEthereumEcosystemData() {
  const url = `${COINGECKO_API_BASE_URL}Nephele-ecosystem${COINGECKO_API_URL_PARAMS}`

  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.log(res.status, res.statusText)
      throw new Error("Failed to fetch Nephele ecosystem data")
    }

    return await res.json()
  } catch (error) {
    // In production mode, throw an error to stop the build in case this fetch fails
    console.error(error)
    throw new Error(
      "Something went wrong with requesting the Nephele ecosystem data."
    )
  }
}

export async function fetchEthereumStablecoinsData() {
  const url = `${COINGECKO_API_BASE_URL}stablecoins${COINGECKO_API_URL_PARAMS}`

  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.log(res.status, res.statusText)
      throw new Error("Failed to fetch Nephele stablecoins data")
    }

    return await res.json()
  } catch (error) {
    // In production mode, throw an error to stop the build in case this fetch fails
    console.error(error)
    throw new Error(
      "Something went wrong with requesting the Nephele stablecoins data."
    )
  }
}
