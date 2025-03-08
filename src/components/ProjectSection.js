"use client"
import TaskCard from "./TaskCard";
import { useState } from "react";
function ProjectSection() {
    const tasks = 
        [
            {
                heading: "Website for DevSource",
                description: "Create a login page using React.js and Tailwind CSS with JWT authentication , Develop a signup page with form validation and MongoDB backend integration , Design the homepage featuring members, tasks, and showcase projects. , Build a section displaying projects categorized under Web, Android, and Game development , Create a credits page acknowledging contributors and technologies used",
                StartingDate:" 10th March 2025 ",
                images : ["/Reference/LearningWeb.png" , "/Reference/MembersUIWeb.png" , "/Reference/signupLoginWeb.png"]

            },{
                heading: "Make an Android Platform for DevSource",
                description: "Implement login and signup functionality using Firebase Authentication. , Develop a home screen displaying key project updates and tasks. , Create a layout showing group members dynamically fetched from the database. , Design a page that displays weekly updated tasks with Firebase database integration. , Implement bottom navigation for Home, Members, and Tasks, along with top navigation for switching between Web, Android, and Game groups.",
                StartingDate:" 10th March 2025 ",
                images : ["/Reference/MobileRef3.png" , "/Reference/MobileRef2.png" , "/Reference/AndroidRef1.png"]
            },{
                heading: "Create a 3D top-down Game",
                description: "Develop a full-fledged top-down style game with multiple character designs and enemies. , Use Blender to create and animate characters with proper rigging. , Build the game in Godot, ensuring smooth physics and UI interactions. , Optimize game performance for mobile platforms with touch controls.",
                StartingDate:" 10th March 2025 ",
                images : ["/Reference/GameRef1.png" , "/Reference/GameRef2.png" , "/Reference/GameRef3.png"]
            }
        ]
    
    const [title, setTitle] = useState("");
    const [i , setI] = useState(0);
    const setWeb = () =>{
        setTitle("Web Developers");
        setI(0);
    }
    const setApp = () =>{
        setTitle("Mobile Developers");
        setI(1);
    }
    const setGame = () =>{
        setTitle("Game Developers");
        setI(2);
    }
    
    return ( 
        <div className="h-[80vh] w-full overflow-auto overflow-x-hidden "> 
            <div className="flex w-full md:gap-10 gap-2 text-black justify-evenly rounded-lg">
                <button className="bg-emerald-600 md:text-xl text-xs text-white p-2 rounded-lg" onClick={() => setWeb()}>
                    Web Members
                </button>
                <button className="bg-blue-600 md:text-xl text-xs text-white p-2 rounded-lg" onClick={() => setGame()}>
                    Game Members
                </button>                    
                <button className="bg-red-600 md:text-xl text-xs text-white p-2 rounded-lg" onClick={() => setApp()}>
                    Android Members
                </button>
            </div>
            <TaskCard title={tasks[i].heading} endDate={tasks[i].StartingDate} images={tasks[i].images} description={tasks[i].description}/>
        </div>
     );
}

export default ProjectSection;