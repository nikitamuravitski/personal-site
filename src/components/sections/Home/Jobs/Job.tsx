import React from 'react'
import { Job } from './Jobs'

type JobProps = {
  data: Job
}

const Job = ({ data }: JobProps) => {
  const { icon, name, bullets, review, technologies, link, time } = data
  return (
    <>
      <div className='flex'>
        {icon}
        <div className='ml-3 flex flex-col justify-start'>
          <h3 className='text-xl font-medium'>{name}</h3>
          <p className='text-lg'>{review}</p>
          {time && <p className='text-slate-500 text-base'>{time.from} - {time.to}</p>}
          {link &&
            <p>
              <a
                className="text-blue-600 underline underline-offset-1 visited:text-purple-600"
                href={link.value}
              >
                {link.slug}
              </a>
            </p>
          }
        </div>
      </div>
      <div className='flex flex-wrap gap-2 my-5 overflow-x-scroll'>
        {technologies.map(tech => <span key={tech} className='rounded-full px-3 py-1 bg-slate-200'>{tech}</span>)}
      </div>
      <h4 className='text-xl'>What I worked on: </h4>
      <ul className='list-disc text-lg text-slate-700 pl-4'>
        {bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
      </ul>
    </>
  )
}

export default Job