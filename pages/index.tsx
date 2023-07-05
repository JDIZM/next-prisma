import type { NextPage } from "next";
import Head from "next/head";
import { User } from "@prisma/client";

// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/users");
  const users = await response.json();
  return {
    props: { users },
  };
}

type PageProps = {
  users: User[];
};

const Home: NextPage<PageProps> = ({ users }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Head>
        <title>Next, Prisma and Tailwind</title>
        <meta name="description" content="Next, Prisma and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <h1 className="text-3xl font-bold underline mb-4">
          I am using Tailwind.
        </h1>
        <p>display users seeded to database:</p>
        <ul className="pt-4">
          {users.map((user: User) => (
            <li key={user.id} className="pt-4">
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </main>

      <footer className="">
        <div></div>
      </footer>
    </div>
  );
};

export default Home;
