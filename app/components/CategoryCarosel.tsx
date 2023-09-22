import React, { useEffect, useState } from 'react'

const CategoryCarosel = () => {
    const [category, setCategories] = useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/category", { next: { revalidate: 10 } })
        .then(response=> response.json())
        .then(data => setCategories(data))
    },[])

    const carouselItemsToDisplay = category.map(cat=>{
        return(
            <div className="carousel-item">
                <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt={cat.name} />
            </div>
        )
    })
    return (
        <div className="carousel carousel-center rounded-box">
            {carouselItemsToDisplay}
        </div>
    )
}

export default CategoryCarosel