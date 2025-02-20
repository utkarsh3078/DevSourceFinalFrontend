"use client";

import { useState } from "react";
import Level from "./level";
import { CiStar } from "react-icons/ci";

const Data = [
    {
        Title : "Hey there"
    }
]


function Plan() {
    const n = 5; // Number of Level components
    const maxMargin = ((1200/(1440*4)) * window.innerWidth); // Max margin-left value
    const step = 140; // Increment/decrement step

    // Initialize margins in zig-zag order
    const [margins, setMargins] = useState(() => {
        let values = [];
        let increasing = true;
        let marginLeft = 0;

        for (let i = 0; i < n; i++) {
            values.push(marginLeft);

            if (increasing) {
                marginLeft += step;
                if (marginLeft >= maxMargin) increasing = false;
            } else {
                marginLeft -= step;
                if (marginLeft <= 0) increasing = true;
            }
        }
        return values;
    });

    return (
        <div className="w-full flex flex-col md:ml-[30%] ml-0  items-center md:items-start md:pt-0 gap-36 h-[75vh] overflow-y-auto p-10">
            {margins.map((margin, index) => (
                    <Level
                        key={index}
                        text={<CiStar className=" text-black" />}
                        left={margin}
                        LevelTitle={index}
                        LevelDesc="Start your Development journey with devSource"
                        />

            ))}
        </div>
    );
}

export default Plan;
