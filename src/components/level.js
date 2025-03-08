"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Level({ onClickHandler, text, left, LevelTitle, LevelDesc }) {
    const DoNothing = () => {};

    const [hidden, setHidden] = useState(true);

    return (
        <span style={{ marginLeft: `${left}px` }} className="relative">
            <div
                onClick={onClickHandler}
                className="bg-green-400 md:w-20 w-10 h-8 md:h-16 flex justify-center items-center rounded-full 
                md:border-b-8 border-b-4 hover:border-b-2 md:hover:border-b-4  md:hover:border-t-4 hover:border-t-2 border-green-800"
                onMouseEnter={window.innerWidth >= 768 ? () => setHidden(false) : () => DoNothing}
                onMouseLeave={window.innerWidth >= 768 ? () => setHidden(true) : () => DoNothing}
            >
                {text}
            </div>

            {/* Animated Tooltip */}
            <AnimatePresence>
                {!hidden && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -10, y: 10 }} // Animation start state
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} // Animation end state
                        exit={{ opacity: 0, scale: 0.9, x: -10, y: 10 }} // Animation exit state
                        transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
                        className="absolute bg-white text-black rounded-2xl p-5 top-0 left-28 shadow-lg"
                    >
                        <h1 className="font-bold">{LevelTitle}</h1>
                        <p>{LevelDesc}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}

export default Level;
