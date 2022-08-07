import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next, Prisma and Tailwind</title>
        <meta name="description" content="Next, Prisma and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          I am using Tailwind.
        </h1>

      </main>

      <footer className={styles.footer}>
       <div></div>
      </footer>
    </div>
  )
}

export default Home
