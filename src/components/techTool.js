function TechTool({src , name , index }) {
    
    return ( 
        <div className={ index%2==0  ?"bg-transparent w-[80%] md:w-[100%] m-auto my-10 md:h-28 flex rounded-lg h-20   " : " w-[80%]  bg-transparent md:w-[100%] m-auto h-20 md:h-28 flex flex-row-reverse rounded-lg"  }>
            <div className=" h-full w-[30%] bg-white rounded-lg p-2">
                <img src={src}></img>
            </div>

            <div className={ index%2==0 ? "  Airnt tracking-wider rounded-r-lg text-black text-center w-full bg-white h-[80%] my-auto border-r-8 border-yellow-500" : " bg-white border-l-8 border-red-500 rounded-l-lg text-center h-[80%] Airnt tracking-wider my-auto w-full text-black"}>
                <p className=" md:text-3xl text-xl md:pt-5 pt-2 h-full w-full">
                    {name}
                </p>
            </div>
        </div>
     );
}

export default TechTool;