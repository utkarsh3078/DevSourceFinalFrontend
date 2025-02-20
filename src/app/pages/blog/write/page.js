"use client";

import Nav from "@/components/navbar";
import { useState } from "react";
import { FaBold, FaItalic, FaUnderline, FaImage } from "react-icons/fa";

function BlogEditor() {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const applyFormat = (tag) => {
        let formattedText = content;

        if (tag === "bold") formattedText += "**Bold Text**";
        if (tag === "italic") formattedText += "_Italic Text_";
        if (tag === "underline") formattedText += "<u>Underlined Text</u>";

        setContent(formattedText);
    };
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <Nav/>
            <h1 className="text-3xl mt-28 font-semibold mb-6 text-gray-800">Write Your Blog</h1>
            <div className="w-full max-w-3xl bg-white p-4 shadow-md rounded-md flex gap-4 border">
                <button onClick={() => applyFormat("bold")} className="p-2 text-gray-700 hover:text-black">
                    <FaBold size={18} />
                </button>
                <button onClick={() => applyFormat("italic")} className="p-2 text-gray-700 hover:text-black">
                    <FaItalic size={18} />
                </button>
                <button onClick={() => applyFormat("underline")} className="p-2 text-gray-700 hover:text-black">
                    <FaUnderline size={18} />
                </button>
                <label className="p-2 text-gray-700 hover:text-black cursor-pointer">
                    <FaImage size={18} />
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
            </div>
            <textarea
                className="w-full max-w-3xl text-black min-h-[300px] mt-4 p-4 bg-white shadow-md rounded-md border outline-none resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your blog here..."
            ></textarea>
            {image && (
                <div className="w-full max-w-3xl mt-4">
                    <img src={image} alt="Uploaded" className="w-full h-auto rounded-md shadow-md" />
                </div>
            )}
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Publish Blog
            </button>
        </div>
    );
}

export default BlogEditor;
