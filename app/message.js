"use client";

import useSWR from "swr";

async function fetchData (url) {
  const res = await fetch(url)
  return await res.json()
}

export default function Message ({ initialData }) {
  console.log('client', initialData)
  const { data, error } = useSWR('/api/hello', fetchData, { fallbackData: initialData })
  console.log('client after', data)

  return (
    <div>
      Hello, {data.name}!
    </div>
  )
}