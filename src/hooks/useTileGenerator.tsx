import { useEffect, useState, useRef } from "react"
import generateCircle from './generateCircle'
import useCurrentScreen from "./useScreenSizeForTiles"

// don`t forget to update config if screens change
const maxRadius = 30

type initiateMatrixProps = {
  width: number,
  height: number
}
const createArray: (l: number) => unknown[] = (l) => Array.apply(null, Array(l))

const initiateMatrix = ({ width, height }: initiateMatrixProps): number[][] => createArray(height)
  .map(item => createArray(width)
    .map(i => 1)
  )

const useTileGenerator = () => {
  const { horisontalTilesCount, verticalTilesCount } = useCurrentScreen()
  let matrixBuffer = useRef<number[][] | null>(null)
  const [matrix, setMatrix] = useState<null | number[][]>(null)

  const onTileClick: (x: number, y: number) => void = (x, y) => {
    console.log(x, y)
    matrixBuffer.current[y][x] = 0
    setMatrix([...matrixBuffer.current])

    for (let i = 1; i < 40; i++) {
      const cb = async () => {
        const corners = [
          matrixBuffer.current[0][0],
          matrixBuffer.current[0][matrixBuffer.current[0].length - 1],
          matrixBuffer.current[matrixBuffer.current.length - 1][matrixBuffer.current[0].length - 1],
          matrixBuffer.current[matrixBuffer.current.length - 1][0],
        ]
        const areCornersEmpty = corners.every(corner => corner === 0)
        generateCircle({
          matrix: matrixBuffer.current,
          x,
          y,
          radius: i
        })
        setMatrix([...matrixBuffer.current])
      }
      setTimeout(cb, 50 * i)
    }
  }

  useEffect(() => {
    if (horisontalTilesCount && verticalTilesCount)
      matrixBuffer.current = initiateMatrix(
        { width: horisontalTilesCount, height: verticalTilesCount }
      )
    setMatrix(matrixBuffer.current)
  }, [horisontalTilesCount, verticalTilesCount])

  return { matrix, onTileClick }
}

export default useTileGenerator