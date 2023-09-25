import React from 'react'
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from '@/app/api/auth/[...nextauth]/options'
import NavBar from '@/app/components/NavBar'
const page = async () => {
  const session = await getServerSession(options)
  console.log(session)
  return (
    <div>
      <NavBar />
      <p>user data</p>
    </div>
  )
}

export default page