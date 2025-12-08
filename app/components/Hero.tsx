"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeScale } from "../lib/motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-[650px] md:h-[760px] flex items-center pt-20"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://www.covering-bruxelles.be/wp-content/uploads/2023/04/covering-bruxelles-voiture-mat.jpeg')",
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#6e6e6e]/90" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center h-full">

                {/* Left Column */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-white max-w-lg mt-10"
                >
                    <p className="text-[13px] uppercase tracking-[0.28em] text-[#d62458] mb-4">
                        COVERING BRUXELLES CBX BY CAMELEON SKIN
                    </p>

                    <h1 className="text-3xl md:text-[38px] leading-tight font-semibold mb-6">
                        Covering Voiture Bruxelles : Expert Film Voiture Bruxelles
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        <a
                            href="#contact"
                            className="bg-[#d62458] hover:bg-[#b51f4b] text-white px-6 py-3 rounded-full text-sm font-medium shadow-md transition"
                        >
                            Demander un devis
                        </a>

                        <a
                            href="#realisations"
                            className="border border-white/70 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition"
                        >
                            Voir nos réalisations
                        </a>
                    </div>
                </motion.div>

                {/* Right Card (Contact) */}
                <motion.div
                    variants={fadeScale}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.15 }}
                    className="hidden md:flex justify-center"
                >
                    <div className="bg-black/90 border border-black rounded-2xl p-6 w-[320px] shadow-xl">
                        <h3 className="text-white font-medium text-[15px] mb-3">
                            Contactez votre spécialiste covering
                        </h3>

                        <a
                            href="tel:+32473289842"
                            className="bg-[#d62458] hover:bg-[#b51f4b] transition text-white px-6 py-3 rounded-full text-sm font-medium shadow-md inline-block"
                        >
                            +32 4 73 28 98 42
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
