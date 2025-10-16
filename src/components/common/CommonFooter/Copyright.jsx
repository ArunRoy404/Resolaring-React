import logoWhite from "@/assets/Images/Logo/LogoWhite.svg"

const Copyright = () => {
    return (
        <div
            className="text-[#C1C4CC] text-xs flex items-center gap-3 justify-center mt-6 pt-6 border-t border-white/20"
        >
            <img src={logoWhite} alt="" className="w-5 md:w-8" />
            <p>
                Copyright 2025.  All Rights Reserved.  Powered by the Awesomeness of Fresh Fruit.
            </p>
        </div>
    );
};

export default Copyright;