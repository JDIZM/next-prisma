// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("posting..", req.body);
    const { name, email } = req.body;
    if (!name || !email)
      res.status(400).json({ error: "name and email are required" });

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
        },
      });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  if (req.method === "GET") {
    try {
      const users = await prisma.user.findUniqueOrThrow({
        where: {
          id: Number(req.query.id),
        },
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
