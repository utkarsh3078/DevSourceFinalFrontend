import RankCard from "./RankCard";

function LeaderBoard() {
    return ( 
        <div className="w-full h-[80vh] px-5 overflow-y-auto overflow-x-hidden justify-evenly pb-10 flex flex-col gap-10">
            <RankCard Rank="1" Trophies={"matters"} streak={5} />
            <RankCard Rank="1" Trophies={"matters"} streak={5} />
            <RankCard Rank="1" Trophies={"matters"} streak={5} />
            <RankCard Rank="1" Trophies={"matters"} streak={5} />   
        </div>
     );
}

export default LeaderBoard;