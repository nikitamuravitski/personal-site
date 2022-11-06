import React, { useRef, useState, useEffect, SetStateAction, Dispatch } from 'react'
import { tabs } from '../sections/Home/HomeMainSection'
import styles from './style.module.css'

type WindowProps = {
  removeFromStack: () => void
  name: tabs
  children: any
}

const Window = ({ name, removeFromStack, children }: WindowProps) => {
  const [isMinimised, setIsMinimised] = useState<boolean>(false)
  const [isFullSize, setIsFullSize] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeHandler = () => {
    setIsOpen(false)
    setTimeout(removeFromStack, 250)
  }

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return <div
    className={
      `${styles['container']}
      ${isOpen ? ' opacity-100 ' + ((isFullSize ? 'z-30 fixed top-3 bottom-3 left-3 right-3 lg:bottom-10 lg:top-10 lg:right-10 lg:left-10 mb-3 ' : ' mb-3 ') + (isMinimised ? ' max-h-12 ' : ' max-h-2screen '))
        : ' opacity-0 max-h-0 ' + (isFullSize ? ' fixed bottom-10 top-10 right-10 left-10 ' : ' ' + isMinimised ? ' max-h-0 ' : ' ')
      }`
    }
  >
    <Header
      closeHandler={closeHandler}
      name={name}
      setIsFullSize={setIsFullSize}
      setIsMinimised={setIsMinimised}
    />
    <div style={{maxHeight: '86%'}} className="px-12 py-6 flex flex-col overflow-y-auto">
      {children}
    </div>
  </div>

}

export default Window

type HeaderProps = {
  name: tabs
  closeHandler: () => void
  setIsFullSize: Dispatch<SetStateAction<boolean>>
  setIsMinimised: Dispatch<SetStateAction<boolean>>
}

const Header = ({ name, closeHandler, setIsFullSize, setIsMinimised }: HeaderProps) => {
  const [isHoveredOver, setIsHoveredOver] = useState<boolean>(false)
  return <div
    className='w-full bg-slate-300 rounded-t-2xl'
  >
    <div
      className='flex w-fit gap-2 p-3 items-center'
      onMouseEnter={() => setIsHoveredOver(true)}
      onMouseLeave={() => setIsHoveredOver(false)}
    >
      <button
        onClick={() => {
          closeHandler()
        }}
        className='rounded-full h-4 justify-start aspect-square bg-red-400 p-1'
      >
        <svg className={`${isHoveredOver ? '' : 'md:hidden'} w-2 h-2 text-slate-800`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 10L10 2M2 2L10 10 " />
        </svg>
      </button>
      <button
        onClick={function minimise() { setIsFullSize(false); setIsMinimised(prev => !prev) }}
        className='rounded-full h-4 justify-start aspect-square bg-yellow-400 p-1'>
        <svg className={`${isHoveredOver ? '' : 'md:hidden'} w-2 h-2 scale-150 text-slate-800`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" strokeWidth="1.5" stroke="currentColor">
          <line x1={2} x2={10} y1={6} y2={6} />
        </svg>
      </button>
      <button
        onClick={() => { setIsFullSize(prev => !prev); setIsMinimised(false) }}
        className='rounded-full h-4 justify-start aspect-square bg-green-400 p-1'>
        <svg className={`${isHoveredOver ? '' : 'md:hidden'} w-2 h-2 scale-150 -rotate-45 text-slate-800`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </button>
      {name}
    </div>
  </div>
}