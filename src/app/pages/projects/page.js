"use client"

import LeaderBoard from "@/components/LeaderBoard";
import Plan from "@/components/learningPlan";
import LearnSection from "@/components/LearnSection";
import Nav from "@/components/navbar";
import ProjectSection from "@/components/ProjectSection";
import { useState } from "react";

function Projects() {
    const [mode , setMode] = useState(0);

    const renderContent = () => {
        switch(mode){
            case 0:
                return <LearnSection/>;
            case 1 : return <Plan/>;
            case 2 : return <LeaderBoard/>;
            case 3 : return <ProjectSection/>
            default : return <h1>Choose any button from left hand side</h1>
        }
    }


    return ( 
        <div className="bg-slate-800">
            <Nav/>
            <div className="flex">
                {/* sidebar  */}
                <div className="w-[18%] pt-28 flex flex-col gap-10">
                    <button className="w-[100%] p-5 bg-green-700 text-white text-2xl rounded-sm hover:bg-green-500 " onClick={()=>{setMode(0)}} >Learn</button>
                    <button className="w-[100%] p-5 bg-green-700 text-white text-2xl rounded-sm hover:bg-green-500 " onClick={()=>{setMode(1)}} >Practice</button>
                    <button className="w-[100%] p-5 bg-green-700 text-white text-2xl rounded-sm hover:bg-green-500 " onClick={()=>{setMode(2)}} >Leader board</button>
                    <button className="w-[100%] p-5 bg-green-700 text-white text-2xl rounded-sm hover:bg-green-500 " onClick={()=>{setMode(3)}} >Build a project</button>
                </div>
                <div className="w-2 h-screen bg-gray-400 mx-5 "></div> 
                {/* level */}
                <div className="w-[64%] pt-28">
                    {
                        renderContent()
                    }
                </div>
                
                {/* switch the group */}
                <div className="pt-28 w-[18%]">
                    <div>
                        Learn Web Developent
                    </div>
                    <div>
                        Learn Android Development
                    </div>
                    <div>
                        Learn Game Development
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Projects;