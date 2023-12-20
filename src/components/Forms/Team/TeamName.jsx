import { PropTypes } from "prop-types";
import { MdDeleteOutline } from "react-icons/md";


const TeamName = ({ name, deleteName, index, showDelete }) => {
    return (
        <div className='flex w-full justify-between items-center my-2 px-5 py-2 hover:bg-gray-400 duration-300'>
            <p className="italic font-semibold">
                <span className="mr-2">{index + 1}.</span>{name}
            </p>
            { showDelete && <div className="hover:cursor-pointer hover:scale-105 duration-300" onClick={() => deleteName(name)}>
                <MdDeleteOutline className='text-red-500 cursor-pointer w-[50px]' />
            </div>}
        </div>
    )
}

TeamName.propTypes = {
    name: PropTypes.string.isRequired,
    deleteName: PropTypes.func,
    index: PropTypes.number.isRequired,
    showDelete : PropTypes.bool
};
export default TeamName
