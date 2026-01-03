"use client";

import { motion } from "framer-motion";
import {fadeUp} from "@/app/lib/motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-[650px] md:h-[760px] flex items-center pt-20 overflow-hidden"
        >
            {/* Background image */}
            <Image
                src="/images/Section-1-hero.png"
                alt="Hero"
                fill
                className="object-cover"
            />

            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

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
                        CoverUp Belgium
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 italic">
                        Un look sur mesure <br /> pour votre voiture
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 mb-6">
                        Le covering constitue une solution efficace en remplacement de la peinture. Grâce à une vaste gamme de teintes et de couleurs, il transforme l’apparence de votre véhicule tout en préservant la carrosserie d’origine. Idéal pour personnaliser votre voiture selon vos goûts, sans engagement définitif.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="bg-[#d62458] hover:bg-[#b51f4b] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg transition"
                        >
                            Demander un devis
                        </a>

                        <a
                            href="tel:+32483115525"
                            className="border border-white/70 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition flex items-center gap-2"
                        >
                            +32 4 83 11 55 25
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
