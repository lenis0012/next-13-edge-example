import Message from "./message";

async function getData () {
  if (process.env.NODE_ENV === 'production') {
    return await (await fetch('https://next-13-lenis0012.vercel.app/api/hello', { cache: 'no-store' })).json()
  }
  return await (await fetch('http://localhost:3000/api/hello')).json()
}

export default async function IndexPage () {
  const data = await getData()
  return (
    <Message initialData={data} />
  )
}