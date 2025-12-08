"use client";

import { motion } from "framer-motion";
import { fadeScale, fadeUp } from "../lib/motion";

const images = [
    "https://www.covering-bruxelles.be/wp-content/uploads/2023/03/covering-voiture-bruxelles-1.jpg",
    "https://www.covering-bruxelles.be/wp-content/uploads/2023/03/covering-voiture-bruxelles-2.jpg",
    "https://www.covering-bruxelles.be/wp-content/uploads/2023/03/covering-voiture-bruxelles-3.jpg",
    "https://www.covering-bruxelles.be/wp-content/uploads/2023/03/covering-voiture-bruxelles-4.jpg",
    // ajoute d'autres URLs du carousel si tu veux
];

export default function Realisations() {
    return (
        <section
            id="realisations"
            className="py-16 bg-[#111827] text-white border-y border-black/40"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center mb-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="relative inline-block mb-4">
            <span className="px-6 py-1 border-y border-white/40 text-xs tracking-[0.25em] uppercase">
              COVERING BRUXELLES
            </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold">Nos Réalisations</h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {images.map((src) => (
                        <figure
                            key={src}
                            className="relative overflow-hidden rounded-xl border border-white/10"
                        >
                            <img
                                src={src}
                                alt="Réalisation covering Bruxelles"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </figure>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
