import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import TeamName from '../components/Forms/Team/TeamName'
import { motion } from "framer-motion";

const Result = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [allteams, setteams] = useState([])
    
    function divideNamesIntoTeamsWithSize (names, minSize, maxSize)  {
        // Checking if the size constraints are valid
        if (minSize <= 0 || maxSize <= 0 || minSize > maxSize) {
          console.error("Invalid size constraints");
          setteams([])
          return [];
        }
      
        // Shuffling the names array randomly
        const shuffledNames = names.slice().sort(() => Math.random() - 0.5);
      
        // Calculating the number of teams
        const numberOfTeams = Math.ceil(shuffledNames.length / maxSize);
      
        // Initializing teams with an empty array
        const teams = Array.from({ length: numberOfTeams }, () => []);
      
        // Distributing names to teams with size constraints
        shuffledNames.forEach((name, index) => {
          const teamIndex = index % numberOfTeams;
          const currentTeamSize = teams[teamIndex].length;
      
          // Checking if the current team has reached the maximum size
          if (currentTeamSize < maxSize) {
            teams[teamIndex].push(name);
          } else {
            // If the current team has reached the maximum size,
            // find the next team with space and add the name
            for (let i = 0; i < numberOfTeams; i++) {
              const nextTeamIndex = (teamIndex + i) % numberOfTeams;
              if (teams[nextTeamIndex].length < maxSize) {
                teams[nextTeamIndex].push(name);
                break;
              }
            }
          }
        });
      
        // Check and adjust team sizes to meet the minimum size requirement
        teams.forEach((team, index) => {
          while (team.length < minSize) {
            // Find a team with excess members and move one to the current team
            for (let i = 0; i < numberOfTeams; i++) {
              const otherTeamIndex = (index + i) % numberOfTeams;
              const otherTeam = teams[otherTeamIndex];
              if (otherTeam.length > minSize) {
                team.push(otherTeam.pop());
                break;
              }
            }
          }
        });
        setteams(teams)
        return teams;
    }

    useEffect(() => {
        try {
            if(location.state.names.length === 0) {
                toast.error('Please add some names first')
                navigate('/form/enter/team')
            }
        } catch (error) {
            toast.error('Please add some names first')
            navigate('/form/enter/team')
        }

        divideNamesIntoTeamsWithSize(location.state.names, location.state.min, location.state.max)
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
                allteams.map((team, index) => {
                    return (
                        <div key={index} className="card flex flex-col  px-3 py-5 w-full my-5 min-w-[300px] max-w-[300px]">
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
                <button onClick={() => navigate('/form')} className="text-white font-semibold rounded-full my-10 border-2 p-2 px-5 hover:scale-110 duration-300 mx-5 w-full italic">
                    Home
                </button>
                <button onClick={() => navigate('/form/enter/team')} className="w-fit-content flex flex-nowrap text-sm text-white font-semibold rounded-full my-10 bg-green-500 p-2 px-5 hover:scale-110 duration-300 mx-5 w-full italic">
                    Add More Names
                </button>
            </div>
        </motion.div>
    )
}

export default Result
