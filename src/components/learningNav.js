import { useState } from "react";
import { Menu, X } from "lucide-react";

function LearningNav({setState}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-800 p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center">
                <span className="text-white font-semibold text-lg">Learning Topics</span>
                <button 
                    className="text-white md:hidden" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <div className={`flex flex-col md:flex-row md:justify-center gap-3 md:gap-5 mt-4 md:mt-0 ${isOpen ? "block" : "hidden"} md:flex`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={ () => setState(0) } >
                    Web Development
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={ () => setState(1) }>
                    Android Development
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={ () => setState(2) }>
                    Game Development
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={ () => setState(3) }>
                    AI Dev
                </button>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={ () => setState(4) }>
                    Low-Level Development
                </button>
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200" onClick={ () => setState(5) }>
                    Scientific Development
                </button>
            </div>
        </nav>
    );
}

export default LearningNav;