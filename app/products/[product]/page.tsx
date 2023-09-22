import NavBar from '@/app/components/NavBar'
import React from 'react'

const page = ({params}) => {
  const decodedProduct = decodeURIComponent(params.product);

  return (
    <div>
      <NavBar />
      <p className='text-black'>Product Page coming for {decodedProduct} coming soon!</p>
    </div>
  )
}

export default page