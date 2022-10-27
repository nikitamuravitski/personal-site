import type { NextPage } from "next"
import Head from "next/head"
import HomeSection from "../components/sections/Home/HomeMainSection"

const Home: NextPage = (props) => {
  console.log(props)
  return (
    <>
      <Head>
        <title>Nikita Muravitski</title>
        <meta name="theme-color" content="#A7A7A7" />
        <meta name="description" content="Personal page. Front-end web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeSection />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(context.req)
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home