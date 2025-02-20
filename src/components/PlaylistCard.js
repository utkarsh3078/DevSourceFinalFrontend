function Playlist({ Title , link , Desc  }) {
    return ( 
        <div className="md:w-[30%] md:m-0 m-2 bg-gray-600 rounded-xl hover:scale-105 duration-200 ">
            <div className="bg-white text-black h-36 rounded-2xl">
                <img src={link} alt={link}></img>
            </div>
            <div className="p-2 text-left">
                <h1>{Title}</h1>
                <p>{Desc}</p>
            </div>
        </div>
     );
}

export default Playlist;