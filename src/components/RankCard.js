function RankCard({Rank , Trophies , streak}) {
    return ( 
        <div className="w-[full] bg-slate-400 md:text-xl text-sm rounded-xl md:h-52  p-5 flex gap-5 hover:scale-105 duration-150 "   >
            <div className="text-black">
                userImage from profile
            </div>
            <div>
                <p className="text-black">
                    {Rank}
                </p>
                <div className="text-black">
                    <p>{Trophies}</p>
                    <p>{streak}</p>
                </div>
            </div>
        </div>
     );
}

export default RankCard;