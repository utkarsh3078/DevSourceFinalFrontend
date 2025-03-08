import React, { useEffect, useState } from "react";
import LearningNav from "./learningNav";

// Function to extract video ID from YouTube URL
function extractVideoId(url) {
  const match = url.match(/(?:\?v=|\/embed\/|\/v\/|\/watch\?v=|\/\d+\/|\/vi\/|\/e\/|watch\?v=|&v=)([^#&?]*)/);
  return match && match[1] ? match[1] : null;
}

// Playlist data with YouTube video links
const WebData = [
  { link: "https://www.youtube.com/watch?v=pQN-pnXPaVg", title: "Responsive Web Design - freeCodeCamp" },
  { link: "https://www.youtube.com/watch?v=PkZNo7MFNFg", title: "JavaScript Tutorial - freeCodeCamp" },
  { link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8", title: "React JS Crash Course - The Net Ninja" },
  { link: "https://www.youtube.com/watch?v=HGTJBPNC-Gw", title: "HTML & CSS - CodeWithHarry" },
];

const AndroidData = [
  { link: "https://www.youtube.com/watch?v=fis26HvvDII", title: "Android Development for Beginners - freeCodeCamp" },
  { link: "https://www.youtube.com/watch?v=mXjZQX3UzOs", title: "Jetpack Compose Crash Course - Philipp Lackner" },
];

const GameData = [
  { link: "https://www.youtube.com/watch?v=vrWEWgRzmiI", title: "Unity Game Development - Brackeys" },
  { link: "https://www.youtube.com/watch?v=2-Rp-DebU4o", title: "Game AI Basics - Sebastian Lague" },
];

const AIData = [
  { link: "https://www.youtube.com/watch?v=aircAruvnKk", title: "Neural Networks Explained - 3Blue1Brown" },
  { link: "https://www.youtube.com/watch?v=7eh4d6sabA0", title: "Machine Learning Basics - Sentdex" },
];

const SystemDevData = [
  { link: "https://www.youtube.com/watch?v=Gxgl-VzAy5k", title: "Operating Systems Crash Course - MIT" },
  { link: "https://www.youtube.com/watch?v=lxjdvN32Hmo", title: "C++ System Programming - CppCon" },
];

const LowDev = [
  { link : "https://youtu.be/e_q7AemBFmM?si=6XJPgUMaNs89lmQm" , title:  "simple program"},
  { link : "https://youtu.be/8jLOx1hD3_o?si=lxjI_ax0smSxYUkA" , title:  "C++ pogram"}
]

const categories = [
  { id: 0, name: "Web Development", data: WebData },
  { id: 1, name: "Android Development", data: AndroidData },
  { id: 2, name: "Game Development", data: GameData },
  { id: 3, name: "Artificial Intelligence", data: AIData },
  { id: 4 , name:"Low level Development" , data:LowDev},
  { id: 5, name: "System Development", data: SystemDevData },
];

function LearnSection() {
  const [state, setState] = useState(0);
  const [data, setData] = useState(categories[0].data);

  useEffect(() => {
    setData(categories[state].data);
  }, [state]);

  return (
    <>
      <LearningNav setState={setState} state={state} />
      <div className="text-center flex flex-wrap justify-center items-center h-[75vh] md:gap-10 gap-5 overflow-x-hidden overflow-auto p-5">
        {data.map((item, index) => {
          const videoId = extractVideoId(item.link);
          return (
            <div key={index} className="flex flex-col items-center gap-2">
              {videoId && (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg shadow-lg md:h-max md:w-full h-[150px] w-[250px]"
                ></iframe>
              )}
              <h3 className="text-white font-semibold">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LearnSection;
