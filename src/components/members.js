function MemberList({ title, data }) {
    return ( 
        <div className="m-10 flex justify-center items-center flex-col p-5 rounded-lg shadow-lg mt-5">
            <h1 className="text-4xl font-bold">{title}</h1>
            <ul className="flex flex-col list-disc p-10 gap-3 w-[100%]">
                {data.map((item, index) => (
                    <li key={index} className="border-red-500 border-2 text-center p-2 hover:p-5 rounded-lg  text-3xl hover:text-4xl hover:shadow-red-500 hover:shadow-lg duration-200 cursor pointer text-yellow-600">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemberList;
