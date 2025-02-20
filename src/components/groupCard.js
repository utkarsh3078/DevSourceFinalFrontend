function GroupCard({title, desc, background }) {
    return (
        <div className="relative flex flex-col p-10 rounded-lg mt-28 overflow-hidden">
            <video
                src={background}
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <div className="absolute top-0 left-0 w-full h-full object-cover -z-5 bg-black opacity-80" >

            </div>
            
            <div className="relative z-10 text-white">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="p-10 md:text-2xl text-sm   md:w-[50%]">{desc}</p>
            </div>
        </div>
    );
}

export default GroupCard;
