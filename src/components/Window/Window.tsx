import React, { useRef, useState, useEffect, SetStateAction, Dispatch } from 'react'
import { tabs } from '../sections/Home/HomeMainSection'
import styles from './style.module.css'

type SidebarProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  isOpen: boolean
}

const Window = ({ setIsOpen, isOpen }: SidebarProps) => {
  const [isFullSize, setIsFullSize] = useState<boolean>(false)



  return <div
    className={
      `${isFullSize ? 'left-10 z-20' : 'left-2/4'}
      ${styles['container']}
      // ${isOpen ? 'opacity-100 z-20 left-10' : 'opacity-0 invisible'}
      `}
  >
    <Header closeHandler={() => { setIsOpen(false) }} setIsFullSize={setIsFullSize} />
    <button onClick={() => setIsOpen(false)}>
    </button>
    <p className='text-slate-600 text-3xl'>Hi there! I was born and raised in Houston
      (no, I don’t have an accent), and am currently based in New York      . My main expertise lies in product design, though I do dabble in logo design and illustration. If you like my site, don’t hesitate to reach out!</p>
  </div>

}

export default Window

type HeaderProps = {
  closeHandler: () => void
  setIsFullSize: Dispatch<SetStateAction<boolean>>
}

const Header = ({ closeHandler, setIsFullSize }: HeaderProps) => {
  const [isHoveredOver, setIsHoveredOver] = useState<boolean>(false)
  return <div
    className='w-full bg-slate-200 rounded-t-2xl'
  >
    <div
      className='flex w-fit gap-2 p-3'
      onMouseEnter={() => setIsHoveredOver(true)}
      onMouseLeave={() => setIsHoveredOver(false)}
    >
      <button
        onClick={() => {
          closeHandler()
          setIsFullSize(false)
        }}
        className='rounded-full h-4 justify-start aspect-square bg-red-400 p-1'
      >
        {isHoveredOver
          &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" strokeWidth="2" stroke="currentColor" className="w-2 h-2 text-slate-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 10L10 2M2 2L10 10 " />
          </svg>
        }
      </button>
      <button
        onClick={() => setIsFullSize(prev => !prev)}
        className='rounded-full h-4 justify-start aspect-square bg-green-400 p-1'>
        {isHoveredOver
          &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-2 h-2 scale-150 -rotate-45 text-slate-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        }
      </button>
    </div>
  </div>
}