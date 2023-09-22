'use client'
import React from 'react'
import { useRouter } from 'next/navigation'



const ProductCard = ({ item }) => {
  const router = useRouter()

  return (
    
    <div className="card w-96 bg-base-100 shadow-xl mt-2 mx-auto">
    <figure><img src="https://placehold.co/900x300/a75502/FFF" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{item.name}!</h2>
      <p>{item.description}</p>
      <div className="card-actions justify-end">
        <button onClick={() => router.push(`/products/${item.name}`, { scroll: false })} className="btn btn-primary">View Product Page</button>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default ProductCard

// <div className='w-1/4 h-36 border-2 border-red-500 my-3 mx-auto p-3 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between' >
//       <div>
//         <p>{item.name}</p>
//         <p>{item.description}</p>
//         <p>${item.price}</p>
//       </div>
//       <div>
//         <button className='border-2 border-purple-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-red-800 p-10 '>Add To Cart!</button>
//       </div>

//     </div>