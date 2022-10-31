import { RefObject, useEffect, useState, useRef, useCallback } from "react"
import generateCircle from './generateCircle'
import useTilesCount, { possibleScreens } from "./useTilesCount"


const maxRadius = 70
const delay = 40

type initiateMatrixProps = {
  width: number,
  height: number
}
const createArray: (length: number) => unknown[] = (length) => Array.apply(null, Array(length))

export type Point = number | null

const initiateMatrix = ({ width, height }: initiateMatrixProps): Point[][] => createArray(height)
  .map(() => createArray(width)
    .map(() => null)
  )

type UseTileGeneratorProps = {
  containerRef: RefObject<HTMLDivElement>

}

const useTileGenerator = ({ containerRef }: UseTileGeneratorProps) => {
  const { horisontalTilesCount, verticalTilesCount, screenSize } = useTilesCount({ containerRef })
  const matrixBuffer = useRef<Point[][]>([[]])
  const [matrix, setMatrix] = useState<null | Point[][]>(null)

  const onTileClick: (x: number, y: number) => void = useCallback((x, y) => {
    if(screenSize === possibleScreens.sm || screenSize === possibleScreens.null ) return
    if (horisontalTilesCount && verticalTilesCount)
      matrixBuffer.current = initiateMatrix(
        { width: horisontalTilesCount, height: verticalTilesCount }
      )
    const row = matrixBuffer.current[y]
    if (row !== undefined) {
      row[x] = 0
    }
    for (let i = 1; i < maxRadius; i++) {
      const corners: Point[] = []

      const firstLine = matrixBuffer.current[0]
      const lastLine = matrixBuffer.current[verticalTilesCount - 1]

      if (firstLine !== undefined) {
        const topLeftPoint = firstLine[0]
        const topRightPoint = firstLine[horisontalTilesCount - 1]
        if (topLeftPoint === undefined || topRightPoint === undefined) return
        corners.push(topLeftPoint)
        corners.push(topRightPoint)
      }
      if (lastLine !== undefined) {
        const bottomLeftPoint = lastLine[0]
        const bottomRightPoint = lastLine[horisontalTilesCount - 1]
        if (bottomLeftPoint === undefined || bottomRightPoint === undefined) return
        corners.push(bottomLeftPoint)
        corners.push(bottomRightPoint)
      }
      if (corners.every(corner => typeof corner === "number")) break

      generateCircle({
        matrix: matrixBuffer.current,
        x,
        y,
        delay: delay,
        iteration: i,
      })
    }
    setMatrix([...matrixBuffer.current])
  }, [verticalTilesCount])

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