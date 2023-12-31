
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Home = () => {
    return (
      <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1,  
        rotate: [0, 180, 360], 
        scale: [0, 0.5, 1]}}
      duration={3}
      className='bg-black w-screen h-screen overflow-hidden grid place-content-center text-white'>
        <div className='flex flex-col w-[350px] md:w-[450px] gap-5'>
          <h1 className='font-bold text-3xl'>
            Welcome To DZRandomizer
          </h1>
          <p className=''>
            This is the based random generator for your use. Generate random numbers, split teams, pick topics and more!
          </p>
          <div className="flex">
          <Link to={'/form'}>
            <button className='flex gap-2 items-center text-sm font-semibold bg-blue-500 py-3 px-5 rounded-full hover:scale-110 duration-300'>
                Get Bamboozled 
                <FaArrowRightLong />
            </button>
          </Link>
          </div>
        </div>
      </motion.div>
    )
}

export default Home
