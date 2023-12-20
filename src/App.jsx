import { FaArrowRightLong } from "react-icons/fa6";
import './App.css'

function App() {

  return (
    <div className='bg-black w-screen h-screen overflow-hidden grid place-content-center text-white'>
      <div className='flex flex-col w-[450px] gap-5'>
        <h1 className='font-bold text-3xl'>
          Welcome To DZRandomizer
        </h1>
        <p className=''>
          This is the based random generator for your use. Generate random numbers, split teams, pick topics and more!
        </p>
        <div className="flex">
        <button className='flex gap-2 items-center text-sm font-semibold bg-blue-500 py-3 px-5 rounded-full hover:scale-110 duration-300'>
          Get Bamboozled 
          <FaArrowRightLong />
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
