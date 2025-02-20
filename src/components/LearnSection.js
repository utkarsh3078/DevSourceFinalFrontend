import Playlist from "./PlaylistCard";

const Data = [
    {
        Title:"Learn Web Development with DevSource",
        Desc : "A full structured plan to learn Web Development",
        link:"adjahsdjask"
    },
    {
        Title:"Learn Web Development with DevSource",
        Desc : "A full structured plan to learn Web Development",
        link:"sdasdasda"
    },
    {
        Title:"Learn Web Development with DevSource",
        Desc : "A full structured plan to learn Web Development",
        link:"sdasdasda"
    },
    {
        Title:"Learn Web Development with DevSource",
        Desc : "A full structured plan to learn Web Development",
        link:"sdasdasda"
    },
]


function LearnSection() {
    return ( 
        <div className=" text-center flex flex-wrap h-[75vh] md:gap-10 gap-5 overflow-x-hidden overflow-auto">
            {
                Data.map((data) => {
                    return  <Playlist Title={data.Title} Desc={data.Desc} link={data.link} />
                })
            }
        </div>
     );
}

export default LearnSection;