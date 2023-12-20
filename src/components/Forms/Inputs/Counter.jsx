import { FaMinus } from 'react-icons/fa6';
import { IoMdAdd } from "react-icons/io";
const Counter = ({ num , setNum }) => {

    return (
        <div className='flex items-center justify-between w-full'>
            <div className='bg-gray-700 flex items-center justify-center hover:scale-105 hover:cursor-pointer duration-300 p-2 rounded-md' onClick={
                () => {
                    if(num > 1) {
                        setNum(num - 1)
                    }
                }
            } >
                <FaMinus />
            </div>
            <p>
                {num}
            </p>
            <div className='bg-gray-700 flex items-center justify-center hover:scale-105 hover:cursor-pointer duration-300 p-2 rounded-md' onClick={
                () => {
                        setNum(num + 1)
                }
            }>
                <IoMdAdd />
            </div>
        </div>
    )
}

export default Counter
