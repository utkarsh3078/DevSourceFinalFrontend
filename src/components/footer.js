function Footer() {
    return ( 
        <div className="flex py-10 px-20 w-[full] justify-between pb-36">
            <div className="text-4xl">
                <p>DevSource Club </p>
                <div className="flex gap-5 m-5">
                    <img src="/insta.svg" className=" text-blue h-12 w-12 hover:bg-white hover:scale-125 rounded-lg duration-300"></img>
                    <img src="/whatsapp.svg" className="h-12 w-12 hover:bg-white hover:scale-125 rounded-lg duration-300" ></img>
                    <img src="/linkdin.svg" className="h-12 w-12 hover:bg-white hover:scale-125 rounded-lg duration-300 " ></img>
                </div>
            </div>
            <div className="flex gap-10">
                <img src="/DevSourceLogo.png" className=" h-20 w-20"></img>
                <div className="text-2xl">
                    <p>Bhuwan Thapa <span className=" pl-5 TrialCondensedBold">Lead</span></p>
                    <p>Adarsh Tiwari <span className=" pl-5 TrialCondensedBold">Vice Lead</span> </p>
                </div>
            </div>
        </div>
     );
}

export default Footer;