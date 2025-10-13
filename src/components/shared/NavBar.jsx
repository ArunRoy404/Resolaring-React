import { useEffect, useState } from "react";
import { navLinks } from "@/data/navLinks";
import Logo from "@/components/common/Logo";
import NavList from "@/components/common/CommonNavBar/NavList";
import NavButtons from "@/components/common/CommonNavBar/NavButtons";
import NavMobileMenu from "@/components/common/CommonNavBar/NavMobileMenu";

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollY && currentScroll > 80) {
                // Scrolling down → hide
                setIsVisible(false);
            } else {
                // Scrolling up → show
                setIsVisible(true);
            }

            setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`border-b bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-transform duration-500 ease-in-out 
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between py-3 md:py-6">
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <NavList navLinks={navLinks} />

                {/* Desktop Buttons */}
                <NavButtons />

                {/* Mobile Menu */}
                <div className="xl:hidden p-2 rounded-md hover:bg-accent">
                    <NavMobileMenu side="left" navLinks={navLinks} />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
