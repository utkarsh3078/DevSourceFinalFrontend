"use client"

import Nav from "@/components/navbar";
import About from "@/components/about";
import Footer from "@/components/footer";
import { ReactTyped } from "react-typed";
import "./font.css"
export default function Home() {
  return (
    <div className="bg-slate-800 w-[100vw] overflow-hidden">
      <Nav />
      <div className=" mt-24 relative mx-auto my-10 bg-yellow-500 rounded-lg justify-center items-center w-[90vw] h-[80vh]">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full rounded-lg shadow-lg"
        />
        {/* Black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
        <div className=" text-white text-4xl p-10 absolute top-0 left-0 w-full h-full rounded-lg flex justify-center items-center ">
            <p className="mogiant text-8xl shadow-lg"></p>Welcome to{" "} <br/>
        <ReactTyped
          strings={["DevSource"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
        </div>
      </div>
      <About/>
      <Footer/>
    </div>
  );
}
