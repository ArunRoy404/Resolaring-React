import phone from "@/assets/Images/icon/phone.svg"


const HelpLogo = () => {
    return (
        <div className="flex items-center gap-4">
            <img src={phone} alt="help" />
            <div className="text-white">
                <p className="text-[#C1C4CC]">Need Help?</p>
                <p className="text-2xl font-semibold ">+34618207554</p>
            </div>
        </div>
    );
};

export default HelpLogo;