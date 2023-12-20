
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { LuAlertTriangle } from "react-icons/lu";


const Update = () => {
    return (
      <motion.div
      initial={{ opacity: 1, scale: 0 }}
      animate={{ 
        opacity: 1,  
        y: "0%", scale: 1
    }}
      duration={3}
      className='bg-black w-screen h-screen overflow-hidden grid place-content-center text-white'>
        <div className='flex flex-col items-end text-center w-[450px] gap-5'>
          <h1 className='flex items-center text-center font-bold text-3xl'>
            <span className='animate-bounce'>
            <LuAlertTriangle /> 
            </span>

            Updates will be available soon!
          </h1>
          <p className=''>
            This website is currently under development. Please check back later for more amazing fetaures!
          </p>
          <div className="flex">
          <Link to={'/form'}>
            <button className='flex gap-2 items-center text-sm font-semibold bg-blue-500 py-3 px-5 rounded-full hover:scale-110 duration-300'>
                <FaArrowLeftLong />
                Home
            </button>
          </Link>
          </div>
        </div>
      </motion.div>
    )
}

export default Update
