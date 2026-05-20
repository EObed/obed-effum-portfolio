"use client";

import React from "react";
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
    { title: "Contact", href: "#contact" },
];

const NavBar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-50 w-full px-6 md:px-8 py-4 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center transition-colors">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">
                Obed Effum
            </span>

            <ul className="hidden md:flex gap-8 list-none">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            className="text-slate-800 dark:text-slate-200 font-medium text-sm hover:text-indigo-500 transition-colors"
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-3">
                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="p-2 rounded-md text-slate-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                    {theme === "dark" ? (
                        <Sun size={20} />
                    ) : (
                        <Moon size={20} />
                    )}
                </button>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="p-1 text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors">
                                <Menu size={22} />
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="end"
                            className="w-44 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800"
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

                                    {index < navLinks.length - 1 && (
                                        <DropdownMenuSeparator />
                                    )}
                                </React.Fragment>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;