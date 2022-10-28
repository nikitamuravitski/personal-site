import React from 'react'
import Job from './Job'

export type Job = {
  icon?: any,
  name: string,
  review: string,
  bullets: string[],
  technologies: string[],
  time?: {
    from: string,
    to: string
  }
  link?: {
    value: string;
    slug: string;
  }
}

const jobList: Job[] = [
  {
    icon: <a href='https://altis.ai/'><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 110 93" fill="none">
      <path d="M103.497 70.1375C102.017 69.2489 100.359 68.6566 98.7006 68.4789C97.2794 68.3011 96.0359 67.5311 95.3253 66.2871L63.9414 15.5795C63.2308 14.2763 63.1716 12.7361 63.823 11.4329C65.4218 6.93081 63.0532 2.07331 58.5529 0.473894C54.0525 -1.12553 49.1969 1.24398 47.5981 5.74606C45.9993 10.2481 48.3679 15.1056 52.8682 16.705C53.1643 16.8235 53.4604 16.8828 53.7565 16.942C55.0592 17.1197 56.2435 17.949 56.9541 19.0746L57.0725 19.3115C57.1317 19.43 57.1909 19.6077 57.2502 19.7262V19.6669L83.6008 66.761L48.9601 47.2717L48.7824 47.2125C48.6048 47.1533 48.4863 47.0348 48.3087 46.9163C47.4205 46.3239 46.8283 45.4354 46.5322 44.4283C46.5322 44.3098 46.5322 44.1914 46.5322 44.0729L46.473 43.9544C46.2954 42.2365 45.7625 40.5186 44.8742 39.0377C44.6374 38.623 44.3413 38.1491 44.0452 37.7345C39.9594 32.0476 31.9654 30.7444 26.2808 34.891C25.3925 35.5427 24.6227 36.2535 23.9714 37.0828L23.7937 37.3198C23.6753 37.4383 23.6161 37.5567 23.4977 37.6752C20.9514 41.0518 20.2408 45.4354 21.6028 49.4635C21.662 50.1151 21.8989 50.9445 22.0173 51.5961C22.4318 54.2026 21.7212 55.5058 20.1224 57.8753C18.8197 59.8301 17.1024 61.4888 15.1484 62.7328C14.5562 63.1475 13.9048 63.5621 13.2535 63.8583C12.7798 64.036 12.1284 64.2137 11.2402 64.4507C3.66067 66.5833 -0.721236 74.5211 1.4105 82.1035C3.54224 89.686 11.477 94.0696 19.0565 91.937C26.3992 89.8637 30.8403 82.3405 29.0046 74.8765C28.7678 73.751 28.6494 72.6255 28.5901 71.5C28.6494 69.5451 29.0046 67.5903 29.5968 65.7539C30.2482 63.5029 32.2615 60.7187 32.2615 60.7187C32.676 60.1856 33.1497 59.6524 33.6234 59.2378C34.7485 58.5269 35.992 58.053 37.2947 57.7568C38.0645 57.5199 38.8343 57.2237 39.5449 56.8683C39.9594 56.6905 40.7292 56.5721 40.7884 56.5128L40.966 56.3944C41.8543 56.3944 42.7425 56.6905 43.5123 57.1644L85.5549 79.971C85.3772 86.4871 90.4697 91.9963 97.0426 92.174C103.556 92.3517 109.063 87.2572 109.241 80.6818C109.3 76.3575 107.109 72.3885 103.497 70.1375ZM60.3293 13.5062L60.3885 13.3285L60.3293 13.5062Z" fill="#44CAE7" />
    </svg></a>,
    name: 'Altis Movement Technologies',
    review: 'Front End Web Developer',
    bullets: ['Admin panel', 'Dashboard for trainers', 'Blog', 'Main website'],
    technologies: ['Next.js', 'React', 'MaterialUI', 'Handlebars', 'PostCSS', 'Gulp'],
    time: {
      from: 'Feb 2022',
      to: 'Currently'
    },
    link: {
      value: 'https://altis.ai/',
      slug: 'altis.ai'
    }
  }
]

const Jobs = React.memo(() => {
  return (
    <div className='flex flex-col gap-5'>{jobList.map(job => <Job key={job.name} data={job} />)}</div>
  )
})

Jobs.displayName = 'Jobs'

export default Jobs