
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import TeamName from "./TeamName";
import TeamNameModal from '../../Modal/TeamName'
import Empty from '../../../assets/sad-face.svg'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Counter from "../Inputs/Counter";

const TeamForm = () => {
    const [names, setNames] = useState([])
    const [min, setmin] = useState(1)
    const [max, setmax] = useState(1)

    const [showModal, setShowModal] = useState(false)

    const addName = (name) => {
        setNames([...names, name])
    }

    const deleteName = (name) => {
        let newNames = [...names]
        newNames = newNames.filter((n) => n !== name)
        setNames(newNames)
    }

    const increaseMin = () => {
        if (min < max) {
            setmin(min + 1)
        }
    }
    
    const decreaseMin = () => {
        if (min > 1) {
            setmin(min - 1)
        }
    }

    const increaseMax = () => {
        setmax(max + 1)
    }

    const decreaseMax = () => {
        if (max > min) {
            setmax(max - 1)
        }
    }

    return (
        <motion.div       
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        className="w-full h-full md:w-1/2  m-auto grid place-content-center">
            <div className=" mb-10 flex items-center italic font-semibold">
                <div className="card w-1/2 mx-2 flex flex-col justify-center items-center p-2 min-w-[100px]">
                    <h4>Min</h4>
                    <Counter num={min} increase={increaseMin} decrease={decreaseMin}  />
                </div>
                <div className="card w-1/2 mx-2 flex flex-col justify-center items-center p-2 min-w-[100px]">
                    <h4>Max</h4>
                    <Counter num={max} increase={increaseMax} decrease={decreaseMax} />
                </div>
            </div>
            <div className="bg-primary flex flex-col min-h-[250px] w-[350px] md:min-w-[400px] relative rounded-xl">
                <h1 className="italic p-5 py-3 text-2xl font-semibold border-b-[1px]">Add Name</h1>
                <div className={`flex flex-col items-center ${names.length == 0 && "justify-center"} h-full pb-5`}>
                    {
                        names.map((name, index) => (
                            <TeamName key={index} index={index} name={name} deleteName={deleteName} showDelete={true} />
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
            <div className="flex items-center justify-center">
                <motion.div
                initial={{ opacity: 0 , y: 100 , paddingLeft : '1rem',      paddingRight : '1rem',
                }}
                animate={{ opacity: 1 , y: 0 }}  
                className="flex justify-center items-center">
                    <Link to="/" >
                        <button className="text-white font-semibold rounded-full my-10 border-2 p-2 px-5 hover:scale-110 duration-300">
                            Home
                        </button>
                    </Link>
                </motion.div>
            {
                names.length >= min && 
                
                <motion.div
                initial={{ opacity: 0 , y: 100 , paddingLeft : '1rem',      paddingRight : '1rem',
                }}
                animate={{ opacity: 1 , y: 0 }}  
                className="flex justify-center items-center">
                    <Link to="/result" state={{
                        names: names,
                        min: min,
                        max: max
                    }} >
                        <button className="text-white font-semibold rounded-full my-10 bg-green-500 p-2 px-5 hover:scale-110 duration-300">
                            Generate Teams
                        </button>
                    </Link>
                </motion.div> 
            }
            </div>
        </motion.div>
    )
}

export default TeamForm
