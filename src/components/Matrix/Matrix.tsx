import React, { useEffect, useRef } from 'react'
import useTileGenerator, { Point } from './useTileGenerator'
import styles from './style.module.css'

const Matrix = React.memo(() => {

  const matrixRef = useRef<HTMLDivElement>(null)
  const { matrix, onTileClick } = useTileGenerator({ containerRef: matrixRef })
  return <div
    ref={matrixRef}
    className={styles["container"]}
  >
    {matrix && matrix.map((row, y) => {
      return <React.Fragment key={y}>
        <span key='line' className='h-0 w-full -my-10' />
        {row.map((delay, x) => {
          return <Tile
            key={y.toString() + x.toString()}
            y={y}
            x={x}
            delay={delay}
            onTileClick={onTileClick}
          />
        })}
      </React.Fragment>
    })
    }
  </div >
})

Matrix.displayName = 'Matrix'

type TileProps = {
  x: number,
  y: number,
  delay: Point,
  onTileClick: (x: number, y: number) => void,
}

const Tile = ({ x, y, delay, onTileClick }: TileProps) => {
  const ref = useRef<HTMLDivElement>(null)

  if (typeof delay === 'number') {
    if (ref.current) {
      let requestID: number
      const startAnimation = () => {
        const start = Date.now();
        
        function playAnimation() {
          const interval = (Date.now() - start) - (delay || 0) ;
          if (ref.current) {
            ref.current.classList.add(`${styles['show']}`);
            if (interval <= 200 && interval > 0) {
              ref.current.classList.replace(`${styles['show']}`, `${styles['hide']}`)
            }
            if (interval >= 200) {
              ref.current.classList.replace(`${styles['hide']}`, `${styles['show']}`)
              return cancelAnimationFrame(requestID)
            }
          }
          requestID = requestAnimationFrame(playAnimation);
        }
        requestAnimationFrame(playAnimation);
      };
      startAnimation()
    }
  }

  return <div
    ref={ref}
    className={styles["tile"]}
    onClick={() => onTileClick(x, y)}
  />
}

export default Matrix