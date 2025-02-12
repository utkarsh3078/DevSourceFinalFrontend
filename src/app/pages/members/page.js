"use client"

import MemberList from "@/components/members";
import Nav from "@/components/navbar";
import { useState } from "react";

function Members() {
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
    const Data = [[
        "Vishesh (UI/UX)",
        "Arnav Gupta",
        "Mayank Suri",
        "Akash Das",
        "Adarsh Singh (UI/UX)",
        "Aman Kumar",
        "Vansh Kumar",
        "Utkarsh",
        "Sonu",
        "Khushi Bhaskar"
    ],
    [
        "Khush",
        "Anuraag"
    ],
    [
        "Yash Mishra",
        "Aadi Jain"
    ]
    ]
    return ( 
        <div>
            <Nav />
            <div>
                <div className="flex gap-10 mt-32 mx-20 text-black p-5 justify-evenly rounded-lg">
                    <button className="bg-emerald-600 text-white p-2 rounded-lg" onClick={() => setWeb()}>
                        Web Members
                    </button>
                    <button className="bg-blue-600 text-white p-2 rounded-lg" onClick={() => setGame()}>
                        Game Members
                    </button>                    
                    <button className="bg-red-600 text-white p-2 rounded-lg" onClick={() => setApp()}>
                        Android Members
                    </button>
                </div>
                {title && <MemberList title={title} data={Data[i]} />}
            </div>
        </div>
    );
}

export default Members;
