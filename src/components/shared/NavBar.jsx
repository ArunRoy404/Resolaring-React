import { useState } from "react";
import { Menu, X, ArrowRight, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLinks";
import Logo from "@/components/common/Logo";
import { NavLink } from "react-router";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b bg-background sticky top-0 z-50">
            <div className="container mx-auto px-4  flex items-center justify-between py-3 md:py-8">
                {/* Logo */}
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>


                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <Button className="flex items-center gap-1">
                        Become a Seller <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                        <UserCircle className="h-5 w-5" />
                        Login
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 justify-center">
                        Book Online
                    </Button>
                </div>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-md hover:bg-accent"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>



            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="flex flex-col gap-2 px-4 py-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-2 px-4 pb-4">
                        <Button variant="outline" className="flex items-center gap-1 justify-center">
                            Become a Seller <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full">
                            <UserCircle className="h-5 w-5" />
                            Login
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-2 justify-center">
                            Book Online
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
