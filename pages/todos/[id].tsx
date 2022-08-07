import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  console.log(router)

  return (
    <div className={styles.container}>
      <Head>
        <title>Next, Prisma and Tailwind</title>
        <meta name="description" content="`${category}`" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold">
        Todo: {id}  
        </h1>

      </main>

      <footer className={styles.footer}>
       <div></div>
      </footer>
    </div>
  )
}

export default Product