"use client";

import BlogCard from "@/components/BlogCard";
import Nav from "@/components/navbar";
import Link from "next/link"; // ✅ Correct import
import { FaSearch } from "react-icons/fa";

function Blogs() {
    const Data = {
        userData: {
            name: "Adarsh",
            trophy: 1,
        },
        BlogData: {
            Title: "It is a blog",
            Desc: "Hey, there is one more thing you can do. ".repeat(7),
            views: 5,
        },
    };

    return (
        <div className="w-full h-[100vh] overflow-auto overflow-x-hidden bg-slate-800 relative">
            <Nav />

            {/* Search Bar */}
            <div className="w-full mt-28 px-10 flex items-center gap-4">
                <FaSearch className="text-white w-8 h-8" />
                <input
                    placeholder="Search blogs..."
                    className="w-[80%] h-14 px-4 text-black bg-white border rounded-md"
                />
            </div>

            {/* Blog Cards */}
            <div className="w-full px-5 flex flex-col gap-2 pt-5 justify-center">
                <hr />
                <BlogCard userData={Data.userData} BlogData={Data.BlogData} />
                <hr />
                <BlogCard userData={Data.userData} BlogData={Data.BlogData} />
                <hr />
                <BlogCard userData={Data.userData} BlogData={Data.BlogData} />
                <hr />
                <BlogCard userData={Data.userData} BlogData={Data.BlogData} />
                <hr />
            </div>

            {/* Write Blog Button */}
            <Link href="/pages/blog/write" className="fixed bottom-10 right-10 bg-blue-500 md:p-6 p-2 hover:bg-blue-300 transition duration-150 cursor-pointer text-white rounded-xl text-sm md:text-lg flex items-center gap-2">
                Write Your Own Blog <span className="text-3xl">+</span>
            </Link>
        </div>
    );
}

export default Blogs;
