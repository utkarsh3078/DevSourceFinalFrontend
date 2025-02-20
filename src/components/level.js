"use client";

import { useState } from "react";




function Level({ onClickHandler, text, left , LevelTitle , LevelDesc }) {
    const DoNothing = () => {

    }
    const [hidden, setHidden] = useState(true);

    return (
        <span style={{ marginLeft: `${left}px` }} className="relative">
            <div
                onClick={onClickHandler}
                className="bg-green-400 md:w-20  w-10 h-8  md:h-16 flex justify-center items-center rounded-full md:border-b-8 border-b-4 hover:border-b-2 md:hover:border-b-4  md:hover:border-t-4 hover:border-t-2 border-green-800"
                
                

                onMouseEnter={
                    window.innerWidth>=768? () => setHidden(false) :  () => DoNothing
                }
                onMouseLeave={
                    window.innerWidth>=768? () => setHidden(true) :  () => DoNothing
                }
            >
                {text}
            </div>
            {!hidden && <div className="absolute bg-white text-black rounded-2xl p-5 top-0 left-28 ">
                <h1>{LevelTitle }</h1>
                <p>{LevelDesc}</p>
            </div>}
        </span>
    );
}

export default Level;
