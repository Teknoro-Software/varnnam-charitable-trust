"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#FAF7F6] border-b border-gray-200 shadow-sm">
            <div className="max-w-[1280px] mx-auto px-6 h-[79px] flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Varnnam Charitable Trust"
                        width={115}
                        height={36}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-black">
                    <a href="#about" className="hover:text-[#c62828]">About</a>
                    <a href="#latest" className="hover:text-[#c62828]">Latest</a>
                    <a href="#work" className="hover:text-[#c62828]">Area of Work</a>
                    <a href="#voices" className="hover:text-[#c62828]">Voices</a>
                    <Link href="/contact" className="hover:text-[#c62828]">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex items-center justify-center h-10 w-10"
                    aria-label="Toggle menu"
                >
                    {open ? (
                        /* Close Icon */
                        <svg
                            className="h-6 w-6 text-black"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        /* Hamburger Icon */
                        <div className="space-y-1.5">
                            <span className="block h-0.5 w-6 bg-black"></span>
                            <span className="block h-0.5 w-6 bg-black"></span>
                            <span className="block h-0.5 w-6 bg-black"></span>
                        </div>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#FAF7F6] border-t border-gray-200">
                    <nav className="px-6 py-6 flex flex-col gap-6 text-[14px] font-medium text-black">
                        <a onClick={() => setOpen(false)} href="#about" className="hover:text-[#c62828]">About</a>
                        <a onClick={() => setOpen(false)} href="#latest" className="hover:text-[#c62828]">Latest</a>
                        <a onClick={() => setOpen(false)} href="#work" className="hover:text-[#c62828]">Area of Work</a>
                        <a onClick={() => setOpen(false)} href="#voices" className="hover:text-[#c62828]">Voices</a>
                        <Link onClick={() => setOpen(false)} href="/contact" className="hover:text-[#c62828]">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
