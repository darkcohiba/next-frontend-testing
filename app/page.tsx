
import Image from 'next/image'
import UserButton from './components/UserButton'
import Link from 'next/link'


// following tutorial https://www.youtube.com/watch?v=ZVnjOPwW4ZA
export default async function Home() {

  const res = await fetch("http://localhost:5000/category", { next: { revalidate: 10 } })
  const category = await res.json()
  console.log(category)


  return (
    <main>
      <h1>Welcome to this Eccommerce Site on Next.js</h1>

      {category.map(cat => <Link className="border-red-200 border-4 bg-pink-400" key={cat.id} href={`/categories/${cat.name}`}>{cat.name}</Link>)}


      <UserButton title="sam"/>
    </main>
  )
}
