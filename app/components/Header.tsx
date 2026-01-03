"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-sm border-b border-black">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">

                {/* LOGO */}
                <a href="#hero" className="flex items-center">
                    <img
                        src="logo.png"
                        alt="Covering Bruxelles"
                        className="h-10 w-auto text-white"
                    />
                </a>

                {/* DESKTOP MENU */}
                <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide text-white/80">
                    <a href="#hero" className="hover:text-white transition">ACCUEIL</a>
                    <a href="#prestations" className="hover:text-white transition">COVERING</a>
                    <a href="#realisations" className="hover:text-white transition">RÉALISATIONS</a>
                    <a href="#contact" className="hover:text-white transition">CONTACT</a>
                </nav>

                {/* CTA TÉLÉPHONE (DESKTOP) */}
                <a
                    href="tel:+32483115525"
                    className="hidden sm:inline-block bg-[#d62458] hover:bg-[#b51f4b] transition text-white text-[13px] px-5 py-2 rounded-full font-medium shadow-md lg:block"
                >
                    +32 4 83 11 55 25
                </a>

                {/* MOBILE BURGER BUTTON */}
                <button
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-black/95 text-white border-t border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 text-[15px] space-y-4">
                            <a
                                href="#hero"
                                onClick={() => setIsOpen(false)}
                                className="py-1 border-b border-white/10"
                            >
                                ACCUEIL
                            </a>

                            <a
                                href="#prestations"
                                onClick={() => setIsOpen(false)}
                                className="py-1 border-b border-white/10"
                            >
                                COVERING
                            </a>

                            <a
                                href="#realisations"
                                onClick={() => setIsOpen(false)}
                                className="py-1 border-b border-white/10"
                            >
                                RÉALISATIONS
                            </a>

                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="py-1 border-b border-white/10"
                            >
                                CONTACT
                            </a>

                            <a
                                href="tel:+32483115525"
                                onClick={() => setIsOpen(false)}
                                className="inline-block bg-[#d62458] text-white text-center px-5 py-3 rounded-full text-sm mt-2"
                            >
                                +32 4 83 11 55 25
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
