import React from 'react'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number
}

const page = async () => {

  const res = await fetch("http://localhost:5000/items", { next: { revalidate: 10 } })
  const products: Product[] = await res.json()

  return (
    <div>
      <NavBar />
      <div className='flex flex-wrap border-2 border-red-500'>
        {products.map(product =>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2' key={product.id}>
            <ProductCard item={product} />
          </div>

        )}

      </div>
    </div>
  )
}

export default page