import phone from "@/assets/Images/icon/phone.svg"


const HelpLogo = () => {
    return (
        <div className="flex items-center gap-4">
            <img className="w-8 md:w-auto" src={phone} alt="help" />
            <div className="text-white">
                <p className=" text-[#C1C4CC]">Need Help?</p>
                <p className=" lg:text-2xl font-semibold ">+34618207554</p>
            </div>
        </div>
    );
};

export default HelpLogo;