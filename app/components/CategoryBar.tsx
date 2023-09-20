'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const CategoryBar = () => {
    const router = useRouter()
    const [category, setCategories] = useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/category", { next: { revalidate: 10 } })
        .then(response=> response.json())
        .then(data => setCategories(data))
    },[])


    const categoryButtons = category.map((cat)=>
    <button className='h-24 w-24 m-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-pulse' onClick={() => router.push(`categories/${cat.name}`, { scroll: false })}>
        {cat.name}
    </button>
    )
  
  return (
    <div>
        {categoryButtons}
    </div>
  )
}

export default CategoryBar