import Link from "next/link";

function Nav() {
    return (
        <div className="fixed top-0 left-0 flex px-10 py-5 justify-between text-white z-50 w-full bg-slate-800">
            <div className="cursor-pointer text-2xl p-auto">
                <Link href="/" >
                    <img src="/DevSourceLogo.png " className="h-14 w-14"></img>
                </Link>
            </div>
            <div className="flex gap-10">
                {["Home", "Members", "Groups", "Projects" , "Blog", "Profile" ].map((item) => (
                    <Link href={ item=="Home" ?  "/" : "../pages/" + item.toLowerCase()} key={item} className="m-0 p-0 text-2xl uppercase relative text-gray-300 
                        before:content-[attr(data-text)] before:absolute before:text-red-500 
                        before:top-0 before:left-0 before:w-0 before:overflow-hidden 
                        before:transition-all before:duration-300 cursor-pointer hover:before:w-full"
                        data-text={item}>
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Nav;
