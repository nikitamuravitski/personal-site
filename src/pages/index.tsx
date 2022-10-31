import type { NextPage } from "next"
import Head from "next/head"
import HomeSection from "../components/sections/Home/HomeMainSection"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nikita Muravitski</title>
        <meta name="theme-color" content="#A7A7A7" />
        <meta name="description" content="Front-end web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeSection />
      </main>
    </>
  )
}

export default Home