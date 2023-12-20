
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import TeamName from "./TeamName";
import TeamNameModal from '../../Modal/TeamName'
import Empty from '../../../assets/sad-face.svg'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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


    const divideNamesIntoTeamsWithSize = (names, minSize, maxSize) => {
        // Check if the size constraints are valid
        if (minSize <= 0 || maxSize <= 0 || minSize > maxSize) {
          console.error("Invalid size constraints");
          return [];
        }
      
        // Shuffle the names array randomly
        const shuffledNames = names.slice().sort(() => Math.random() - 0.5);
      
        // Calculate the number of teams
        const numberOfTeams = Math.ceil(shuffledNames.length / maxSize);
      
        // Initialize teams with an empty array
        const teams = Array.from({ length: numberOfTeams }, () => []);
      
        // Distribute names to teams with size constraints
        shuffledNames.forEach((name, index) => {
          const teamIndex = index % numberOfTeams;
          const currentTeamSize = teams[teamIndex].length;
      
          // Check if the current team has reached the maximum size
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
      
        return teams;
    }

    return (
        <motion.div       
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        className="w-full h-full md:w-1/2  m-auto grid place-content-center">
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
                    <Link to="/" state={{
                        names: names,
                        teams: divideNamesIntoTeamsWithSize(names, min, max)
                    }} >
                        <button className="text-white font-semibold rounded-full my-10 border-2 p-2 px-5 hover:scale-110 duration-300">
                            Home
                        </button>
                    </Link>
                </motion.div>
            {
                names.length >= 2 && 
                
                <motion.div
                initial={{ opacity: 0 , y: 100 , paddingLeft : '1rem',      paddingRight : '1rem',
                }}
                animate={{ opacity: 1 , y: 0 }}  
                className="flex justify-center items-center">
                    <Link to="/result" state={{
                        names: names,
                        teams: divideNamesIntoTeamsWithSize(names, min, max)
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
