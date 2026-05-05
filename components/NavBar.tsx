import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

const navLinks = [
    {title: "Home", href: "#"},
    {title: "About", href: "#about"},
    {title: "Projects", href: "#projects"},
    {title: "Skills", href: "#skills"},
    {title: "Contact", href: "#contact"}]

const NavBar = () => {
    return (
        <nav className="w-full px-6 md:px-8 py-4 bg-white border-b border-gray-100 flex justify-between items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">
        Obed Effum
      </span>

            <ul className="hidden md:flex gap-8 list-none">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a
                        href={link.href}
                        className="text-slate-800 font-medium text-sm hover:text-indigo-500 transition-colors"
                        >
                        {link.title}
                    </a>
                    </li>
                    ))}
            </ul>

            <div className="md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="p-1 text-slate-800 hover:text-indigo-500 transition-colors">
                            <Menu size={22} />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        {navLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <DropdownMenuItem asChild>
                                    <a href={link.href} className="cursor-pointer font-medium">
                                        {link.title}
                                    </a>
                                </DropdownMenuItem>
                                {index < navLinks.length - 1 && <DropdownMenuSeparator />}
                            </React.Fragment>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default NavBar