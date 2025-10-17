import { cn } from "@/lib/utils";
import LogoBlack from "@/assets/Images/Logo/LogoBlack.svg"
import LogoWhite from "@/assets/Images/Logo/LogoWhite.svg"

const Logo = ({ className, variant}) => {

    if(variant==='secondary'){
        return (
            <div>
                <a
                    href="/"
                    className={cn(
                        "flex items-center w-full gap-2 md:gap-4 font-bold text-xl text-primary hover:opacity-90 transition-opacity",
                        className
                    )}
                >
                    <img src={LogoWhite} alt="ReSolaring" className="w-6 md:w-10 lg:w-14"/>
                    <span className="md:text-3xl lg:text-[32px] text-white font-semibold">
                        Resolaring
                    </span>
                </a>
                <span className="text-[#C1C4CC] text-xs">Recycling and installing panels for a better future</span>
            </div>
        );
    }



    // primary
    return (
        <div>
            <a
                href="/"
                className={cn(
                    "flex items-center w-full gap-2 md:gap-4 font-bold text-xl text-primary hover:opacity-90 transition-opacity",
                    className
                )}
            >
                <img src={LogoBlack} alt="ReSolaring" className=" w-6 md:w-10 lg:w-14" />
                <span className="md:text-3xl lg:text-[32px] font-semibold">
                    Resolaring
                </span>
            </a>
            <span className="text-[#6A7283] text-xs hidden md:block">Recycling and installing panels for a better future</span>
        </div>
    );
};

export default Logo;
