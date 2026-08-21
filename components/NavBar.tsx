"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Solutions", href: "#solutions" },
];

const NavBar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-50 w-full px-6 md:px-8 py-3.5 bg-slate-50/80 dark:bg-slate-950/75 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70 flex justify-between items-center transition-colors">
            <a href="#" className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
                    <Image src={logo} alt="Logo" fill className="object-contain" sizes="32px" />
                </div>
                <span className="text-lg font-bold text-gradient">
                    Obed Effum
                </span>
            </a>

            <ul className="hidden md:flex items-center gap-1 list-none">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            className="px-3.5 py-2 rounded-full text-slate-600 dark:text-slate-300 font-medium text-sm hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-2">
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white brand-gradient hover:opacity-90 transition-opacity"
                >
                    Get In Touch
                </a>

                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    aria-label="Toggle theme"
                    className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                >
                    {theme === "dark" ? (
                        <Sun size={19} />
                    ) : (
                        <Moon size={19} />
                    )}
                </button>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                aria-label="Open menu"
                                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
                            >
                                <Menu size={20} />
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="end"
                            className="w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                        >
                            {navLinks.map((link, index) => (
                                <React.Fragment key={index}>
                                    <DropdownMenuItem asChild>
                                        <a
                                            href={link.href}
                                            className="cursor-pointer font-medium text-slate-800 dark:text-slate-200"
                                        >
                                            {link.title}
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                </React.Fragment>
                            ))}
                            <DropdownMenuItem asChild>
                                <a
                                    href="#contact"
                                    className="cursor-pointer font-medium text-slate-800 dark:text-slate-200"
                                >
                                    Contact
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
