import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useState } from "react";


function BlogCard({ userData, BlogData }) {
    const [Likes,SetLikes] = useState(0);
    const [DisLikes, SetDisLikes] = useState(0);
    return (
        <div className="flex flex-col text-white bg-sky-800 p-5 rounded-lg h-[75%] w-[25%] overflow-auto relative">
            {/* User Section */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-3 border-b border-white/20">
                <div className="flex flex-col items-center text-center">
                    <img 
                        src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png" 
                        alt="User Avatar" 
                        className="h-16 w-16 rounded-full border-2 border-white shadow-md"
                    />
                    <div className="text-lg font-semibold">{userData.name}</div>
                    <div className="text-sm text-yellow-300">🏆 {userData.trophy} Trophy</div>
                    <div className="text-sm text-gray-300">👀 {BlogData.views} Views</div>
                </div>
                <div className=" flex gap-5 ">
                    <span className="bg-blue-800 p-5 rounded-lg" >
                        <AiFillLike className=" hover:text-green-500 cursor-pointer text-2xl" />
                        <span className=" text-gray-500"></span>
                    </span>
                    <span className="bg-blue-800 p-5 rounded-lg" >
                        <AiFillDislike className=" hover:text-red-500 cursor-pointer text-2xl" />
                        <span className=" text-gray-500"></span>
                    </span>
                </div>
                
                {/* Blog Content */}
            </div>
            <div className="flex-1 w-full flex-wrap">
                <h1 className="text-2xl font-bold">{BlogData.Title}</h1>
                <p className=" max-h-[10rem] w-full flex   text-gray-200 overflow-auto">{BlogData.Desc}</p>
            </div>

            {/* Blog Image */}
            <div className="mt-4 w-full rounded-lg overflow-auto shadow-md">
                <img 
                    src="https://cdn.wallpapersafari.com/49/94/xm1l4f.jpg" 
                    alt="Blog Cover" 
                    className="w-full h-64 object-cover rounded-lg"
                />
            </div>
            
        </div>
    );
}

export default BlogCard;
