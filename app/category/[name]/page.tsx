import HomeButton from '@/app/components/HomeButton'
import NavBar from '@/app/components/NavBar'
import ProductCard from '@/app/components/ProductCard'
import SignUpButton from '@/app/components/SignUpButton'
import UserButton from '@/app/components/UserButton'
import React from 'react'

async function page({params}) {
  // console.log(params.name)
  const res = await fetch(`http://localhost:5000/category?name=${params.name}`, { next: { revalidate: 10 } })
  const categor = await res.json()
  // console.log(categor[0].name)
  return (
    <div>
      <NavBar />
      <h1>{categor[0].name} Page!</h1>
      <ol>
        {categor[0].items?.map(item=><ProductCard key={item.id} item={item}/>)}
      </ol>
      <HomeButton />
      <SignUpButton />
      <UserButton />
    </div>
  )
}

export default page