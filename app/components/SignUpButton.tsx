'use client';
import { useRouter } from 'next/navigation'

function SignUpButton() {
    const router = useRouter()

    return (
        <button className="border-red-200 border-4 bg-pink-400" onClick={() => router.push('/user/signup', { scroll: false })}>Signup</button>

    )
}

export default SignUpButton