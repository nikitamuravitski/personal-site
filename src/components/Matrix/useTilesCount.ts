import { RefObject, useEffect, useState, useCallback, useRef } from "react"

// don`t forget to update config if screens change
enum possibleScreens {
  null = 0,
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl'
}

const screenSizes: [possibleScreens, number][] = [
  [possibleScreens.sm, 400],
  [possibleScreens.md, 800],
  [possibleScreens.lg, 1200],
  [possibleScreens.xl, 1600],
  [possibleScreens["2xl"], 2000],
]

const tilesCount: [possibleScreens, number][] = [
  [possibleScreens.sm, 15],
  [possibleScreens.md, 15],
  [possibleScreens.lg, 20],
  [possibleScreens.xl, 25],
  [possibleScreens["2xl"], 30],
]

const getCurrentScreen: (width: number) => { currentScreen: possibleScreens } = (width) => {
  if (typeof window !== undefined) {
    const currentScreenTuple = screenSizes.reduce((acc, current) => {
      if (width >= current[1]) return acc = current
      return acc
    }, screenSizes[0])
    if (currentScreenTuple)
      return { currentScreen: currentScreenTuple[0] }
  }
  return { currentScreen: possibleScreens.null }
}

type UseTilesCountType = {
  containerRef: RefObject<HTMLDivElement>
}

const getTilesCount: (currentScreen: possibleScreens) => [possibleScreens, number] = (currentScreen) => {
  console.log(currentScreen)
  return tilesCount.find(tuple => tuple[0] === currentScreen) || [possibleScreens.null, 0]
}

const useTilesCount = ({ containerRef }: UseTilesCountType) => {

  const [verticalTilesCount, setVerticalTilesCount] = useState(0)
  const [horisontalTilesCount, setHorisontalTilesCount] = useState(0)

  const cb = () => {
    if (containerRef.current) {
      const width = containerRef.current.getBoundingClientRect().width
      const height = containerRef.current.getBoundingClientRect().height
      const { currentScreen } = getCurrentScreen(width)
      const [_, count] = getTilesCount(currentScreen)
      const tileWidth = width / count;
      setHorisontalTilesCount(count)
      setVerticalTilesCount(Math.ceil(height / tileWidth))
    }
  }

  useEffect(() => {
    cb()
    window.addEventListener('resize', cb)
    return () => { window.removeEventListener('resize', cb) }
  }, [])

  return { verticalTilesCount, horisontalTilesCount }
}

export default useTilesCount