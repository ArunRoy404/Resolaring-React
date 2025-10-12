import { useState } from "react";
import { Menu, X, ArrowRight, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLinks";
import Logo from "@/components/common/Logo";
import { NavLink } from "react-router";
import NavList from "@/components/common/CommonNavBar/NavList";
import NavButtons from "@/components/common/CommonNavBar/NavButtons";
import NavMobileMenu from "@/components/common/CommonNavBar/NavMobileMenu";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b bg-background sticky top-0 z-50">
            <div className="container mx-auto px-4  flex items-center justify-between py-3 md:py-8">
                {/* Logo */}
                <Logo />

                {/* Desktop Nav */}
                <NavList navLinks={navLinks} />


                {/* Desktop Buttons */}
                <NavButtons />



                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-md hover:bg-accent"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>



            {/* Mobile Menu */}
            {
                <NavMobileMenu navLinks={navLinks} isOpen={isOpen}/>
            }
        </header>
    );
};

export default NavBar;
