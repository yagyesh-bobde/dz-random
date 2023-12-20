import { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import TeamName from '../components/Forms/Team/TeamName'
import { motion } from "framer-motion";

const Result = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            if(location.state.teams.length === 0) {
                toast.error('Please add some names first')
                navigate('/form/enter/team')
            }
        } catch (error) {
            toast.error('Please add some names first')
            navigate('/form/enter/team')
        }
    }, [])

    return (
        <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ 
          opacity: 1,
          y: 0
        }} 
        className='bg-black w-screen h-screen grid place-content-center bg-bg-form bg-cover'>
            <div className="md:flex gap-5 flex-wrap w-full">
            {
                location.state?.teams?.map((team, index) => {
                    return (
                        <div key={index} className="card flex flex-col justify-center px-3 py-5 w-full my-5">
                            <p className="text-2xl text-white italic">
                                Team {index + 1}
                            </p>
                            <div className="flex flex-col justify-center items-center">
                                {
                                    team.map((name, index) => {
                                        return (
                                            <TeamName name={name} key={index} index={index} showDelete={false} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={() => navigate('/form')} className="text-white font-semibold rounded-full my-10 border-2 p-2 px-5 hover:scale-110 duration-300 mx-5 w-3/4 italic">
                    Home
                </button>
                <button onClick={() => navigate('/form/enter/team')} className="text-white font-semibold rounded-full my-10 bg-green-500 p-2 px-5 hover:scale-110 duration-300 mx-5 w-3/4 italic">
                    Add More Names
                </button>
            </div>
        </motion.div>
    )
}

export default Result
