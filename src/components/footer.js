function Footer() {
    return ( 
        <div className="flex flex-col md:flex-row py-10 px-10 md:px-20 w-full justify-between pb-36 items-center text-center md:text-left">
            <div className="text-4xl mb-6 md:mb-0">
                <p>DevSource Club </p>
                <div className="flex gap-5 mt-5 justify-center md:justify-start">
                    <img src="/insta.svg" className="h-12 w-12 hover:bg-white hover:scale-125 rounded-lg duration-300" alt="Instagram" />
                    <img src="/whatsapp.svg" className="h-12 w-12 hover:bg-white hover:scale-125 rounded-lg duration-300" alt="WhatsApp" />
                    <img src="/linkdin.svg" className="h-12 w-12 hover:bg-white hover:scale-125 rounded-lg duration-300" alt="LinkedIn" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <img src="/DevSourceLogo.png" className="h-20 w-20" alt="DevSource Logo" />
                <div className="text-2xl">
                    <p>Bhuwan Thapa <span className="pl-2 font-bold">Lead</span></p>
                    <p>Adarsh Tiwari <span className="pl-2 font-bold">Vice Lead</span> </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
