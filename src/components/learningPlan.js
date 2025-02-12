"use client";

import { useState } from "react";
import Level from "./level";

function Plan() {
    const n = 20; // Number of Level components
    const maxMargin = 700; // Max margin-left value
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
        <div className="w-full flex flex-col gap-2 h-screen overflow-x-auto">
            {margins.map((margin, index) => (
                <Level
                    key={index}
                    text={index + 1}
                    left={margin}
                />
            ))}
        </div>
    );
}

export default Plan;
