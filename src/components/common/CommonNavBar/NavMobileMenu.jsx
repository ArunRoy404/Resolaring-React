import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { Link } from "react-router"
import NavButtons from "./NavButtons"

export default function NavMobileMenu({ navLinks, side='top' }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu size={22} />
            </SheetTrigger>
            <SheetContent side={side}>
                <SheetHeader>
                    <SheetTitle>ReSolaring</SheetTitle>
                </SheetHeader>

                {/* nav links  */}
                <nav className="flex flex-col gap-2 px-4 py-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* footer buttons  */}
                <SheetFooter className={'p-0'}>
                    <NavButtons variant='mobile' />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
