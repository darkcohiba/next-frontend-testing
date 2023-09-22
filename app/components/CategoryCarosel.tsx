'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const CategoryCarosel = () => {
    const [category, setCategories] = useState([])
    const router = useRouter()



    useEffect(()=>{
        fetch("http://localhost:5000/category", { next: { revalidate: 10 } })
        .then(response=> response.json())
        .then(data => setCategories(data))
    },[])

    const carouselItemsToDisplay = category.map(cat=>{
        return(
            <div onClick={() => router.push(`category/${cat.name}`, { scroll: false })}
            className="carousel-item h-52">
                <img src={cat.image} alt={cat.name} />
            </div>
        )
    })
    return (
        <div className="carousel carousel-center rounded-box mt-3">
            {carouselItemsToDisplay}
        </div>
    )
}

export default CategoryCarosel