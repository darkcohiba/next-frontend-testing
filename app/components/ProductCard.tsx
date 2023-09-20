import React from 'react'

const ProductCard = ({ item }) => {
  return (
    <div className='w-1/4 h-36 border-2 border-red-500 my-3 mx-auto p-3 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between' >
      <div>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      <div>
        <button className='border-2 border-purple-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-red-800 p-10 '>Add To Cart!</button>
      </div>

    </div>
  )
}

export default ProductCard