"use client"

import BlogCard from "@/components/BlogCard";
import Nav from "@/components/navbar";

function Blogs() {

    const Data = {
        userData:{
            name:"Adarsh",
            trophy:1
        },
        BlogData:{
            Title:"It is a blog",
            Desc:"hey there is a one more thing you can do ",
            views:5
        }
    } 

    return ( 
        <div className="w-full h-[100vh] overflow-auto overflow-x-hidden bg-slate-800 relative ">
            <Nav/>
            <div className="w-screen h-screen flex flex-wrap gap-10 pt-32 justify-center ">
                <BlogCard userData={Data.userData} BlogData={Data.BlogData}/>
                <BlogCard userData={Data.userData} BlogData={Data.BlogData}/>
                <BlogCard userData={Data.userData} BlogData={Data.BlogData}/>
                <BlogCard userData={Data.userData} BlogData={Data.BlogData}/>
            </div>
            <div className=" fixed text-center bottom-10 right-10 bg-blue-500 p-10 hover:bg-blue-300 duration-150 cursor-pointer text-white rounded-xl ">
                Write Your own Blog <span className=" text-3xl mt-4">+</span>
            </div>
        </div>
     );
}

export default Blogs;