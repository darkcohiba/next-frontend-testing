
import Image from 'next/image'
import UserButton from './components/UserButton'
import Link from 'next/link'
import CategoryBar from './components/CategoryBar'
import NavBar from './components/NavBar'


// following tutorial https://www.youtube.com/watch?v=ZVnjOPwW4ZA
export default async function Home() {



  return (
    <main>
      {/* <NavBar /> */}
      <h1>Welcome to this Eccommerce Site on Next.js</h1>

      <CategoryBar />

      <UserButton />
    </main>
  )
}
