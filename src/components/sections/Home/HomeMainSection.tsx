import React, { useCallback, useState } from 'react'
import Matrix from '../../Matrix/Matrix'
import Window from '../../Window/Window'
import styles from './style.module.css'
import Jobs from './Jobs/Jobs'

export enum tabs {
  about = 'About',
  jobs = 'Jobs',
  contact = 'Contact',
}

const content = {
  [tabs.about]: <><h2 className='text-zinc-800  text-2xl font-bold'>Hi there!</h2>
    <div className='text-lg leading-8'>
      <p className='text-slate-600 mt-3'>  I was born and raised in Zhytomyr, Ukraine.</p>
      <p className='text-slate-600 mt-3'>My primary expertise lies in React-based apps, though I dabble with the full stack.</p>
      <p className='text-slate-600 mt-3'>
        My developer journey started in 2012. Out of curiosity I started to dig into how the web works.
        I started building simple pages for myself, my friends, and my family just for fun.
        Then my zone of interest switched to engineering, so I decided to keep what I'd learned for a better time.
      </p>
      <p className='text-slate-600 mt-3'>
        When the pandemic hit, it was the perfect opportunity to revisit what was going on in the web world, and my eye landed on React.
        In fact, I loved it so much that I decided to make it my new career.
      </p>
    </div>
  </>,
  [tabs.jobs]: <Jobs key="Jobs" />,
  [tabs.contact]: 'email: nikitamuravitski@gmail.com',
}


const HomeMainSection = () => {
  const [tabStack, setTabStack] = useState<tabs[]>([])
  const removeFromStack = useCallback((name: tabs) => {
    console.log(name, tabStack)
    const index = tabStack.indexOf(name);
    if (index > -1) {
      tabStack.splice(index, 1)
      setTabStack([...tabStack])
    }
  }, [tabStack])
  return <div className="w-screen h-screen relative p-10 flex gap-10 overflow-hidden bg-slate-50 shadow-inner-lg"
  >
    <div
      className={styles["content"]}
    >
      <div className={`${tabStack.length ? 'mt-0' : 'mt-32'} transition-all duration-500`}></div>
      <h1
        className="text-5xl text-zinc-800 font-bold m-3">
        I'm Nikita,
        <br />
        <span className='text-neutral-500'>a front end </span>
        web developer
        <span className='text-neutral-500'> based in Ukraine</span>
      </h1>
      <nav className='justify-self-center'>
        <ul className='duration-700 transition-all flex gap-5'>
          {(Object.values(tabs)).map(item => {
            return <li key={item}><button
              className={styles['nav-item']}
              onClick={e => {
                if (tabStack.includes(item)) return
                tabStack.push(item)
                setTabStack([...tabStack])
              }}
              value={tabs.about}
            >{item}
            </button></li>
          })}
        </ul>
      </nav>
    </div>
    <div className='absolute -m-10 w-screen'>
      <Matrix />
    </div>
    <div className={` ${tabStack.length ? 'w-1/2' : 'w-0'} justify-center h-fit max-h-full flex flex-col duration-700 transition-all overflow-y-auto z-10`}>
      {tabStack.map(item => <Window name={item} removeFromStack={removeFromStack} key={item}>
        {content[item]}
      </Window>)}
    </div>
  </div>

}

export default HomeMainSection