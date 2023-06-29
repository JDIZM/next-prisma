This is an example project to demonstrate how to use Next.js with Prisma, Postgres and Docker.

- [Next.js](https://nextjs.org/)
- TypeScript
- [Prisma](https://www.prisma.io/)
- Postgres
- Docker

## Installation

This project requires node.js to be installed. This project uses volta to manage node versions.

To install volta run the following command in the terminal.

```
curl https://get.volta.sh | bash
```

## Getting Started

Copy the default env vars

```bash
cp .env.example .env
```

You will need docker installed to setup a database then run

```bash
docker compose up -d
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Prisma

### Migrations

run `npm run prisma:status` to check the status of the current migrations.

Then `npm run prisma:migrate` to run the migrations.

### Seeding the database

Seed the database with `npm run prisma:seed`.

The migrations will only create the required tables and schema. The seed script will populate the database with data.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
