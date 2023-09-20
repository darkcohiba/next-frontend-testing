import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='w-1/2 h-36 border-2 border-red-500 m-auto p-3' >
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>${item.price}</p>
    </div>
  )
}

export default ProductCard