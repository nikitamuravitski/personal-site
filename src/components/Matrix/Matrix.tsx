import React, { useRef } from 'react'
import useTileGenerator, { Point } from './useTileGenerator'
import styles from './style.module.css'

const Matrix = React.memo(() => {
  const matrixRef = useRef<HTMLDivElement>(null)
  const { matrix, onTileClick } = useTileGenerator({ containerRef: matrixRef })
  return <div
    ref={matrixRef}
    className={styles["container"]}
  >
    {matrix && matrix.map((row, index) => <Row
      key={index}
      y={index}
      row={row}
      onTileClick={onTileClick}
    />
    )}
  </div >
})

type RowProps = {
  y: number,
  row: Point[],
  onTileClick: (x: number, y: number) => void,
}

const Row = ({ y, row, onTileClick }: RowProps) => {
  return <div
    className={styles["row"]}
  >
    {row.map((delay, index) => <Tile
      key={index}
      y={y}
      x={index}
      delay={delay}
      onTileClick={onTileClick}
    />)}
  </div>
}

type TileProps = {
  x: number,
  y: number,
  delay: Point,
  onTileClick: (x: number, y: number) => void,
}

const Tile = ({ x, y, delay, onTileClick }: TileProps) => {
  return <div
    className={styles["tile"]}
    style={{ opacity: delay === null ? 1 : 0, transitionDelay: `${delay}ms` }}
    onClick={() => onTileClick(x, y)}
  />
}

export default Matrix