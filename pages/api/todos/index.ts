// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  return response.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetchData()
  console.log(data)
  // console.log('req', req)
  res.status(200).json(data)
}
