import ProductCard from '@/app/components/ProductCard'
import React from 'react'

async function pages({params}) {
  console.log(params.name)
  const res = await fetch(`http://localhost:5000/category?name=${params.name}`, { next: { revalidate: 10 } })
  const categor = await res.json()
  console.log(categor[0].name)
  return (
    <div>
      <h1>{categor[0].name} Page!</h1>
      <ol>
        {categor[0].items?.map(item=><ProductCard key={item.id} item={item}/>)}
      </ol>
    </div>
  )
}

export default pages