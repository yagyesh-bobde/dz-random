import logo from '../assets/form.svg'
import Form1 from '../components/Forms/Form1'
import { motion } from "framer-motion";


const Form = () => {
    return (
        <motion.div
        initial={{ opacity: 1, y: "100%" }}
        animate={{ 
          opacity: 1,
          y: 0
        }}  
        duration={50}  
        className='w-screen h-screen p-5 py-[50px] flex items-center justify-center md:p-[75px] lg:p-[100px] bg-bg-form bg-cover object-fill bg-no-repeat  text-white'>
            <div className="w-full md:w-3/4 h-full bg-primary rounded-xl flex">
                <div className="flex items-center justify-center w-1/2">
                    <img src={logo} alt="logo" className='w-1/2 animate-modify-bounce' />
                </div>
                <div className="flex flex-col justify-center w-1/2">
                    <Form1 />
                </div>
            </div>
        </motion.div>
    )
}

export default Form
