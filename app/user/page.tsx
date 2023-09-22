import HomeButton from "../components/HomeButton"
import NavBar from "../components/NavBar";
import SignUpButton from "../components/SignUpButton"

type User = {
    id: number;
    name: string;
}

const UserPage = async () => {
// next revalidate will make it so the fetch request will run every 10 seconds to check the backend and cache/display new info
    const res = await fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:10}})
    const users: User[] = await res.json()



    return (
        <>
            <NavBar />
            <p >User page</p>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user=><li key={user.id}>{user.name}</li>)}
            </ul>
            <HomeButton />
            <SignUpButton />
        </>

    )
}

export default UserPage