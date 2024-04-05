import { useEffect, useState } from "react"

export const useEthPrice = (): number => {
  const [ethPrice, setEthPrice] = useState<number>(0)
  useEffect(() => {
    ;(async () => {
      try {
        const data: { Nephele: { usd: number } } = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=Nephele&vs_currencies=usd"
        ).then((res) => res.json())
        const {
          Nephele: { usd },
        } = data
        if (!usd) throw new Error("Unable to fetch NEPH price from CoinGecko")
        setEthPrice(usd)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  return ethPrice
}
