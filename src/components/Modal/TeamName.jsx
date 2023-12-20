import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const TeamNameModal = ({ addName, setShowModal }) => {
    const [name, setName] = useState("")



    return (
        <motion.div       
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        className="fixed left-0 top-0 right-0 bottom-0 z-[1055] overflow-y-auto overflow-x-hidden outline-none grid place-content-center bg-bg-form bg-cover">
            <div className="text-black w-[350px] md:w-[600px] min-h-[25vh] bg-primary shadow-xl flex flex-col justify-between h-full">
                <div>
                    <div className="heading flex items-center justify-between p-5 py-3 text-2xl text-white italic w-3/4 m-auto">
                        <p>
                            Add a name
                        </p>
                        <div>
                            <IoMdClose onClick={() => { setShowModal(false) }} className="text-2xl cursor-pointer hover:scale-110 duration-300" />
                        </div>
                    </div>
                    <div className="body p-5 flex items-center justify-center">
                        <input autoFocus type="text" className="border-b-[1px] border-white text-lg bg-transparent w-3/4 m-auto px-4 py-2 text-white placeholder:text-gray-400" placeholder="Enter name " value={name} 
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                addName(name)
                                setShowModal(false)
                            }
                        }}
                        />
                        
                    </div>
                </div>
                <div className="footer text-white flex items-center justify-between p-5 w-3/4 m-auto">
                    <button className="border-[1px] bg-gray-800 text-gray-500 border-gray-500 px-10 py-2 rounded-xl" onClick={() => { setShowModal(false)}}>
                        Cancel
                    </button>
                    <button className="border-[1px] px-10 py-2 rounded-xl" onClick={
                        () => {
                            addName(name)
                            setShowModal(false)
                        }
                    }>
                        Add Name
                    </button>
                </div>                
            </div>
        </motion.div>
    )
}




export default TeamNameModal
