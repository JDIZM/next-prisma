import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const ProductPage: NextPage = () => {
  const router = useRouter()
  const { category, name } = router.query

  const todos = [1, 2, 3]

  console.log(router)
  return (
    <div className={styles.container}>
      <Head>
        <title>Next, Prisma and Tailwind</title>
        <meta name="description" content="Next, Prisma and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold">
        Todos
        </h1>
        {todos && (
          <ul>
           {todos.map(todo => {
            return (
              <li key={todo}>
                {todo}
              </li>
            )
           })}
        </ul>
        )}

      </main>

      <footer className={styles.footer}>
       <div></div>
      </footer>
    </div>
  )
}

export default ProductPage
