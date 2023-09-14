'use client';
import { useRouter } from 'next/navigation'

function HomeButton() {
    const router = useRouter()

    return (
        <button className="border-red-200 border-4 bg-pink-400" onClick={() => router.push('/', { scroll: false })}>home</button>
    )
}

export default HomeButton