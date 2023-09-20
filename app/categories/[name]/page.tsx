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
        {categor[0].items?.map(item=><li key={item.id}>{item.name}</li>)}
      </ol>
    </div>
  )
}

export default pages