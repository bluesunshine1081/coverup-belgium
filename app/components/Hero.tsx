"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeScale } from "../lib/motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-[650px] md:h-[760px] flex items-center pt-20 overflow-hidden"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-right md:bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg')",
                }}
            />

            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center h-full">

                {/* Left part (text) */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-white max-w-xl"
                >
                    <p className="text-[13px] uppercase tracking-[0.28em] text-[#d62458] mb-4">
                        COVERING VOITURE BRUXELLES
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 italic">
                        Optez pour un style <br /> unique avec votre voiture
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 mb-6">
                        Le covering, une alternative de choix à la peinture, se distingue par son efficacité et son excellent
                        rapport qualité-prix. Il permet de redonner vie à votre voiture sans investissement dans une nouvelle
                        peinture.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="bg-[#d62458] hover:bg-[#b51f4b] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg transition"
                        >
                            Demander un devis
                        </a>

                        <a
                            href="tel:+32473289842"
                            className="border border-white/70 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition flex items-center gap-2"
                        >
                            +32 4 73 28 98 42
                        </a>
                    </div>
                </motion.div>

                {/* Right card */}
                {/*<motion.div
                    variants={fadeScale}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.15 }}
                    className="hidden md:flex justify-end"
                >
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-[320px] shadow-xl">
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
                </motion.div>*/}
            </div>
        </section>

    );
}
