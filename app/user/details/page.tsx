import React from 'react'
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from '@/app/api/auth/[...nextauth]/options'
import NavBar from '@/app/components/NavBar'
const page = async () => {
  const session = await getServerSession(options)
  if (session){
  return (
    <div>
      <NavBar />
      <p>user data</p>
      <p>{session?.user.name}</p>
    </div>
  )}else {
    return (
      <div>
        <NavBar />
        <p>Please log in</p>
      </div>
    )
  }
}

export default page