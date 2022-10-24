import React, { useEffect, useRef, useState } from 'react'
import Matrix from '../../Matrix/Matrix'
import Window from '../../Window/Window'
import styles from './style.module.css'

export enum tabs {
  null = 0,
  about = 'about',
  currentJob = 'currentJob',
}

const HomeMainSection = () => {
  const [currentTab, setCurrentTab] = useState<tabs>(tabs.null)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  return <div className="w-screen h-screen relative flex overflow-hidden bg-slate-50 shadow-inner-lg"
  >
    <div
      className={`${isSidebarOpen ? 'w-2/5' : 'w-2/3'} z-10 duration-500 absolute flex flex-col top-10 bottom-10 h-auto left-10 bg-slate-50 rounded-3xl border-slate-300 border-4 p-10`}
    >
      <h1 className={` ${isSidebarOpen ? 'mt-10' : 'mt-36'} transition-all duration-700 text-5xl text-zinc-800 font-bold pb-5 m-3`}>I'm Nikita,{' '}
        <span className='text-zinc-600 block'>a front end web developer based in Ukraine</span></h1>
      <p className='text-slate-600 text-3xl'></p>
      <nav>
        <ul className='flex gap-5 my-20'>
          <li><button
            className={styles['nav-item']}
            onClick={e => {
              setCurrentTab(e.target.getAttribute('value'))
              setIsSidebarOpen(true)
            }}
            value={tabs.about}
          >About
          </button></li>
          <li><button
            className={styles['nav-item']}
            onClick={e => {
              setCurrentTab(e.target.getAttribute('value'))
              setIsSidebarOpen(true)
            }}
            value={tabs.currentJob}
          >Current Job
          </button></li>
        </ul>
      </nav>
    </div>
    <Matrix />
    <Window setIsOpen={setIsSidebarOpen} isOpen={isSidebarOpen} />
  </div>

}

export default HomeMainSection