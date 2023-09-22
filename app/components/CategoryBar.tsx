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


    const categoryButtons = category.map((cat:any)=>
    <button 
    className='h-24 w-24 m-6  hover:animate-pulse text-black' key={cat.id}
     onClick={() => router.push(`category/${cat.name}`, { scroll: false })}
     style={{ backgroundImage: `url(${cat.image})`, backgroundSize: 'cover' }}
     >
        {/* {cat.name} */}
    </button>
    )
  
  return (
    <div>
        {categoryButtons}
    </div>
  )
}

export default CategoryBar

    // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500