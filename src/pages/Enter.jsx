// import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import Teams from '../components/Team/Teams'
import TeamForm from '../components/Forms/Team/TeamForm'
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const Enter = () => {
    const { type } = useParams()

    useEffect(() => {
        if(type !== "team") {
            toast.info('Feature coming soon')
            window.location.href = '/update'
        }
    }, [])
    return (
        <motion.div
        initial={{ opacity: 1, y: "100%" }}
        animate={{ 
          opacity: 1,
          y: 0
        }}  
        duration={5}
        className="bg-black md:bg-bg-form bg-cover text-white w-screen flex flex-col  h-screen gap-5 py-10 px-10 ">
            <h1 className='font-bold text-3xl text-center'>
                Let's Generate
                 {" " + type[0].toUpperCase() + type.slice(1)}s!
            </h1>
            {
                type == "team" && <TeamForm />
            }
        </motion.div>
    )
}

export default Enter
