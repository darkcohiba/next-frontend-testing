import CategoryBar from '../components/CategoryBar'
import CategoryCarosel from '../components/CategoryCarosel'
import NavBar from '../components/NavBar'

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="w-full max-w-screen-md mx-auto">
          <CategoryCarosel />
        </div>
        <div className="w-full max-w-screen mx-auto mt-4">
          <CategoryBar />
        </div>
      </div>
    </div>
  )
}

export default page