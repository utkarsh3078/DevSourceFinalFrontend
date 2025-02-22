import { useState } from "react";

function TaskCard({ title, endDate, images, description }) {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className="bg-white shadow-lg rounded-lg mt-2 ml-2  mb-6 p-4 w-[100%] border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>

            <p className="text-sm text-gray-500">Starting Date: {endDate}</p>


            <p className="mt-2  text-sm md:text-2xl text-gray-700">{description}</p>
            {images.length > 0 && (
                <div className="relative w-full mt-2">
                        <img
                            src={images[currentImage]}
                            alt={`Task Image ${currentImage + 1}`}
                            className="w-fit h-fit rounded-lg"
                        />
                    {images.length > 1 && (
                        <>
                            <button
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
                                onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                            >
                                ◀
                            </button>
                            <button
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
                                onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                            >
                                ▶
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default TaskCard;
