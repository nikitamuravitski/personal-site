import React, { useState, useRef, useEffect, useMemo } from 'react'
import useTileGenerator from '../../../hooks/useTileGenerator'

type HomeMainSectionProps = {
  contentPosition: 'left' | 'right'
  children: React.FunctionComponent<RowProps>
}

const HomeMainSection = ({ contentPosition = 'right', children }: HomeMainSectionProps) => {
  const { matrix, onTileClick } = useTileGenerator()

  return (<>

    <div className='relative flex overflow-hidden bg-slate-50 shadow-inner-lg'>
      <style>
        {
          '.clipped-left { clip-path: polygon(0 0, 100% 0%, 75% 120%, 0% 100%);}' +
          '.clipped-right { clip-path: polygon(0 0, 100% 0%, 100% 100%, 25% 100%);}'
        }
      </style>
        <div
          className={`${contentPosition === 'left' ? 'clipped-left left-0' : 'clipped-right right-0'} absolute w-3/5 z-10 pl-10 flex flex-col justify-center items-center top-0 h-screen bg-slate-600 `}
        >
          <h1 className='text-4xl text-white'>Primal Header</h1>
          <p className='text-slate-300'>Primal text</p>
        </div>
      <div
        className="w-screen origin-center -rotate-3 scale-110  flex flex-col gap-1 p-1 h-screen overflow-y-hidden z-0"
      >
        {matrix && matrix.map((row, index) => <Row
          key={index}
          y={index}
          row={row}
          onTileClick={onTileClick} />)}
      </div>
    </div>
  </>
  )
}

type RowProps = {
  y: number,
  row: number[],
  onTileClick: (x: number, y: number) => void
}

const Row = ({ y, row, onTileClick }: RowProps) => {
  return <div
    className='flex justify-around gap-1'
  >
    {row.map((isShown, index) => <Tile
      key={index}
      y={y}
      x={index}
      isShown={isShown}
      onTileClick={onTileClick} />)}
  </div>
}

type TileProps = {
  x: number,
  y: number,
  isShown: number,
  onTileClick: (x: number, y: number) => void
}

const Tile = React.memo(({ x, y, isShown, onTileClick }: TileProps) => {
  return <div
    style={{ opacity: isShown }}
    className='rounded-sm flex-1 aspect-square bg-slate-400 duration-300 transition-all 
    hover:bg-slate-500 hover:rounded-md'
    onClick={() => onTileClick(x, y)}
  >
  </div >
})


export default HomeMainSection