import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { User, PrismaClient } from "@prisma/client";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return {
    props: { users },
  };
}

type PageProps = {
  users: User[];
};

const Home: NextPage<PageProps> = ({ users }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next, Prisma and Tailwind</title>
        <meta name="description" content="Next, Prisma and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline mb-4">
          I am using Tailwind.
        </h1>
        <p>display users seeded to database:</p>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <div></div>
      </footer>
    </div>
  );
};

export default Home;
