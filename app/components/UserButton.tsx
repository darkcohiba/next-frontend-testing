'use client';
import { useRouter } from 'next/navigation'

function UserButton({title}) {
    console.log(title)
    const router = useRouter()
    return (
        <button className="border-red-200 border-4 bg-pink-400" onClick={() => router.push('/user', { scroll: false })}>User</button>
    )
}

export default UserButton