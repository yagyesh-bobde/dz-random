import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"


const Form1 = () => {

    // const [isActive, setisActive] = useState(false)
    const [options, setOptions] = useState([
        {id: 1, name: "List of numbers", isActive: true, value: "number" }  ,
        {id: 2, name: "Split teams", isActive : false, value:"team" }  ,
        {id: 3, name: "Pick topics", isActive : false, value:"topics"}  ,
        {id: 4, name: "Pick a name", isActive : false, value:"name"}  ,
        {id: 5, name: "Pick a place", isActive : false, value:"place"}  ,
        {id: 6, name: "Pick a date", isActive : false, value:"date"}  ,
    ])


    const changeOptions = (e) => {
        e.target.checked = true
        let newoptions = [...options]
        newoptions.forEach((option) => {
            if(option.id == e.target.id){
                option.isActive = true
            } else{
                option.isActive = false
            }
        })
        setOptions(newoptions)
        // console.log(options)
    }


    return (
        <div className="flex flex-col justify-center gap-5 h-full py-10 px-10 ">
            {/* what to randomize? options - list of numbers, Split teams, Pick topics, Pick a name, Pick a place, Pick a date, Pick a time, Pick a color, Pic */}
            <h1 className="text-lg italic text-green-primary font-serif"> 
                DZrandomizer
            </h1>
            <h2 className="text-3xl font-semibold">
                What to randomize?
            </h2>
            <form className="flex flex-col ">
                {/* generate list of radio inputs  */}
                {
                    options.map((option) => (
                        <div key={option.id} className={`flex items-center gap-2 w-min-content border-b-2 duration-300 ${option.isActive === true && "bg-green-300/50"}`}>
                            <input 
                                type="radio" 
                                name="randomize" 
                                id={option.id} 
                                className="w-5 h-5 my-5 unchecked:bg-transparent" 
                                checked={option.isActive}
                                onClick={(e) => {
                                    if(!e.target.checked){ 
                                        e.target.checked = true
                                    } else{ 
                                        e.target.checked = false
                                    }
                                }}
                                onChange={changeOptions}
                                    
                            />
                            <label htmlFor={option.id} className="my-5 font-semibold italic">{option.name}</label>
                        </div>
                    ))
                }
                <div className="my-5">
                    <Link to={`/form/enter/${options.find(option => option.isActive === true).value || "none"}`}>
                        <button className="flex gap-2 items-center text-sm font-semibold bg-green-500 hover:bg-transparent border-[1.5px] border-green-primary duration-300 py-2 px-5 rounded-full ">
                            Next
                            <FaArrowRightLong />
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Form1
