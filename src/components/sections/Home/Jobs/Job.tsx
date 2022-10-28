import React from 'react'
import { Job } from './Jobs'
import styles from './style.module.css'

type JobProps = {
  data: Job
}

const Job = ({ data }: JobProps) => {
  const { icon, name, bullets, review, technologies, link, time } = data
  return (
    <div className={styles['wrapper']}>
      <div className='flex'>
        {icon}
        <div className='ml-3 flex flex-col justify-start'>
          <h3 className='text-xl font-medium'>{name}</h3>
          <p className='text-lg'>{review}</p>
          {time && <p className='text-slate-500 text-base'>{time.from} - {time.to}</p>}
          {link &&
            <p>
              <a
                className="text-blue-800 visited:text-purple-600"
                href={link.value}
              >
                {link.slug}
              </a>
            </p>
          }
        </div>
      </div>
      <div className='flex flex-wrap gap-2 my-5'>
        {technologies.map(tech => <span key={tech} className='rounded-full px-3 py-1 bg-slate-200'>{tech}</span>)}
      </div>
      <h4 className='text-xl'>What I was building: </h4>
      <ul className='text-lg text-slate-700 pl-4'>
        {bullets.map(bullet => <li className={styles['bullet']} key={bullet}>{bullet}</li>)}
      </ul>
    </div>
  )
}

export default Job