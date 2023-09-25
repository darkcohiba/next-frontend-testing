import NavBar from '@/app/components/NavBar'
import React from 'react'
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from '@/app/api/auth/[...nextauth]/options'

const page = async () => {

  const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/user/details')
    }
  return (
    <div>
        <NavBar />
        <p>{session?.user}</p>
    </div>
  )
}

export default page