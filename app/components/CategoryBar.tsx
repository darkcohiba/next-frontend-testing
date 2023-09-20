'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


const CategoryBar = async () => {
    const router = useRouter()


    const res = await fetch("http://localhost:5000/category", { next: { revalidate: 10 } })
    const category = await res.json()
    console.log(category)
    const categoryButtons = category.map((cat)=>
    <button className='' onClick={() => router.push('/', { scroll: false })}>
        {cat.name}
    </button>
    )
  
  return (
    <div>

    </div>
  )
}

export default CategoryBar