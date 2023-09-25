import Link from 'next/link'
import { getServerSession } from "next-auth/next"
import { options } from '../api/auth/[...nextauth]/options'

const NavBar = async () => {
    const session = await getServerSession(options)
    // console.log(session)

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Next.Wear</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 z-10">
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/category">Categories</Link></li>
                    <li>
                        <details>
                            <summary>
                                User
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><Link href="/user">Users</Link></li>
                                <li><Link href="/user/login">Login</Link></li>
                                <li><Link href="/user/signup">Signup</Link></li>
                                {session ? <li><Link href="/user/details">Details</Link></li> : null }
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar