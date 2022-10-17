import { useEffect, useState } from "react"
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from "../../tailwind.config.cjs"

let tilesCount = {
  sm: 20,
  md: 25,
  lg: 30,
  xl: 35,
  '2xl': 35
}

const fullConfig = resolveConfig(tailwindConfig)
const screens = { ...fullConfig.theme?.screens }

const getCurrentScreen = (): {
  currentScreen: string,
  width: number,
  height: number
}
  | undefined => {
  if (typeof window !== undefined) {
    const width = window.innerWidth
    const height = window.innerHeight
    let currentScreen = ''

    for (const property in screens) {
      const currentProp = +screens[property].substring(0, screens[property].length - 2)
      if (currentProp >= width) {
        currentScreen = property
        break
      }
    }
    return { currentScreen, width, height }
  }
}

const useTilesCount = () => {
  const [verticalTilesCount, setVerticalTilesCount] = useState(0)
  const [horisontalTilesCount, setHorisontalTilesCount] = useState(0)

  const cb = () => {
    const { currentScreen, width, height } = getCurrentScreen()
    const tileWidth = width / tilesCount[currentScreen]
    setVerticalTilesCount(Math.ceil(height / tileWidth))
    setHorisontalTilesCount(tilesCount[currentScreen])
  }

  useEffect(() => {
    cb()
    window.addEventListener('resize', cb)
    return () => { window.removeEventListener('resize', cb) }
  }, [])

  return { verticalTilesCount, horisontalTilesCount }
}

export default useTilesCount