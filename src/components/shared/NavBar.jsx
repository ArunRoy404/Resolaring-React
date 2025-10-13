import { navLinks } from "@/data/navLinks";
import Logo from "@/components/common/Logo";
import NavList from "@/components/common/CommonNavBar/NavList";
import NavButtons from "@/components/common/CommonNavBar/NavButtons";
import NavMobileMenu from "../common/CommonNavBar/NavMobileMenu";

const NavBar = () => {

    return (
        <header className="border-b bg-background sticky top-0 z-50">
            <div className="container mx-auto px-4  flex items-center justify-between py-3 md:py-8">
                {/* Logo */}
                <Logo />

                {/* Desktop Nav */}
                <NavList navLinks={navLinks} />


                {/* Desktop Buttons */}
                <NavButtons />


                {/* Mobile Menu */}
                <div
                    className="xl:hidden p-2 rounded-md hover:bg-accent"
                >
                    <NavMobileMenu side='left' navLinks={navLinks} />
                </div>
            </div>


        </header>
    );
};

export default NavBar;
