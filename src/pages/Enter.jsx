import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Teams from '../components/Team/Teams'
import TeamForm from '../components/Forms/Team/TeamForm'

const Enter = () => {
    const { type } = useParams()

    return (
        <div className="bg-black text-white w-screen flex flex-col  h-screen gap-5 py-10 px-10 ">
            <h1 className='font-bold text-3xl text-center'>
                Let's Generate
                 {" " + type[0].toUpperCase() + type.slice(1)}s!
            </h1>
            {
                type == "team" && <TeamForm />
            }
        </div>
    )
}

export default Enter
