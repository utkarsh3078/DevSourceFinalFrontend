import Playlist from "./PlaylistCard";

const Data = [
  { link: "https://www.youtube.com/watch?v=hKB-YGF14SY&list=PLaPtZlCTmQeb5NoP4Ea4t3KRiRC1ZnC1q" },
  { link: "https://www.youtube.com/watch?v=mXjZQX3UzOs&list=PLaPtZlCTmQebwctHPnxKu3dXmg4YRkbX6" },
  { link: "https://www.youtube.com/watch?v=J6mDkcqU_ZE&list=PLaPtZlCTmQeZhYq8CNhlYFw8SEVZI1ie-" }
];

function LearnSection() {
  return (
    <div className="text-center flex flex-wrap h-[75vh] md:gap-10 gap-5 overflow-x-hidden overflow-auto">
      {Data.map((data, index) => (
        <Playlist key={index} link={data.link} /> 
      ))}
    </div>
  );
}

export default LearnSection;
