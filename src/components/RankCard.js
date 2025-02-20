function RankCard({ Rank, Trophies, streak, userImage }) {
    return (
        <div className="w-full bg-slate-300 md:text-lg text-sm rounded-xl md:h-52 h-40 p-5 flex gap-5 items-center hover:scale-105 transition-transform duration-200 shadow-md">
            {/* Profile Image */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white overflow-hidden">
                <img
                    src={userImage || "/default-profile.png"} 
                    alt="User Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* User Details */}
            <div className="flex flex-col justify-center text-black">
                <p className="font-semibold text-lg md:text-2xl flex items-center gap-2">
                    🏆 Rank: <span className="text-blue-700">{Rank}</span>
                </p>
                <div className="flex flex-col gap-1 text-gray-700 md:text-xl">
                    <p className="flex items-center gap-2">🥇 Trophies: <span className="text-yellow-600 font-semibold">{Trophies}</span></p>
                    <p className="flex items-center gap-2">🔥 Streak: <span className="text-red-500 font-semibold">{streak} Days</span></p>
                </div>
            </div>
        </div>
    );
}

export default RankCard;
