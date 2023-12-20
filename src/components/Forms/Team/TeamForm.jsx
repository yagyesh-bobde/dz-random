
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import TeamName from "./TeamName";
import TeamNameModal from '../../Modal/TeamName'
import Empty from '../../../assets/sad-face.svg'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TeamForm = () => {
    const [names, setNames] = useState([])

    const [showModal, setShowModal] = useState(false)

    const addName = (name) => {
        setNames([...names, name])
    }

    const deleteName = (name) => {
        let newNames = [...names]
        newNames = newNames.filter((n) => n !== name)
        setNames(newNames)
    }


    return (
        <motion.div       
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        className="w-full h-full md:w-1/2  m-auto grid place-content-center">
            <div className="bg-primary flex flex-col min-h-[250px] min-w-[450px] relative rounded-xl">
                <h1 className="italic p-5 py-3 text-2xl font-semibold border-b-[1px]">Add Name</h1>
                <div className={`flex flex-col items-center ${names.length == 0 && "justify-center"} h-full pb-5`}>
                    {
                        names.map((name, index) => (
                            <TeamName key={index} index={index} name={name} deleteName={deleteName} />
                        ))
                    }
                    {
                        names.length == 0 && 
                        <div className="flex items-center gap-2">
                            <div className="text-gray-600">
                                <img className="text-gray-600" src={Empty} alt="empty" width={75} />
                            </div>
                            <p className="text-gray-600 text-2xl italic font-semibold">No Names!</p>
                        </div>
                    }
                </div>
                <IoMdAdd onClick={() => {
                    setShowModal(true)
                }} className="absolute -bottom-5 -right-5 text-5xl cursor-pointer hover:scale-110 duration-300 bg-gray-300 rounded-full text-black hover:animate-none animate-pulse" />
            </div>
            {
                showModal && <TeamNameModal addName={addName} setShowModal={setShowModal} />
            }
            {
                names.length >= 2 && 
                <motion.div
                initial={{ opacity: 0 , y: 100 , paddingLeft : '1rem',      paddingRight : '1rem',
                }}
                animate={{ opacity: 1 , y: 0 }}  
                className="flex justify-center items-center">
                    <Link to="/" >
                    <button className="text-white font-semibold rounded-full my-10 bg-green-500 p-2 px-5 hover:scale-110 duration-300">
                        Generate Teams
                    </button>
                    </Link>
                </motion.div>
            }
        </motion.div>
    )
}

export default TeamForm
