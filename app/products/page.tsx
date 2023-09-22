import React from 'react'
import NavBar from '../components/NavBar'

type Product = {
  id: number;
  name: string;
}

const page = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:10}})
  const users: Product[] = await res.json()

  return (
    <div>
      <NavBar />
    </div>
  )
}

export default page