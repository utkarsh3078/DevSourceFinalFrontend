function RankCard({ Rank, Trophies, streak, userImage }) {
    return (
        <div className="w-full bg-slate-300 text-sm md:text-lg rounded-xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-5 items-center hover:scale-105 transition-transform duration-200 shadow-md">
            {/* Profile Image */}
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white overflow-hidden">
                <img
                    src={userImage || "https://staticg.sportskeeda.com/editor/2023/09/2d48e-16947810528440-1920.jpg"}
                    alt="User Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* User Details */}
            <div className="flex flex-col items-center md:items-start text-black text-center md:text-left">
                <p className="font-semibold text-base md:text-2xl flex items-center gap-2">
                    🏆 Rank: <span className="text-blue-700">{Rank}</span>
                </p>
                <div className="flex flex-col gap-1 text-gray-700 text-sm md:text-xl">
                    <p className="flex items-center gap-2">🥇 Trophies: <span className="text-yellow-600 font-semibold">{Trophies}</span></p>
                    <p className="flex items-center gap-2">🔥 Streak: <span className="text-red-500 font-semibold">{streak} Days</span></p>
                </div>
            </div>
        </div>
    );
}

export default RankCard;