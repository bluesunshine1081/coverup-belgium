"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const reviews = [
    {
        name: "Gilles V.",
        stars: 5,
        date: "Il y a 4 mois",
        text:
            "Le covering de ma voiture a été l’un des meilleurs investissements que j’ai faits...",
    },
    {
        name: "Mathis D.",
        stars: 5,
        date: "Il y a 1 mois",
        text:
            "Rien à dire. Ils ont fait du super travail, ils mont posé un film de qualité...",
    },
    {
        name: "Antony L.",
        stars: 5,
        date: "Il y a 2 mois",
        text:
            "Merci infiniment pour ce que vous avez fait. Mon véhicule semble tout neuf...",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-20">
            {/* Title */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <h2 className="text-2xl md:text-3xl font-bold uppercase">
                    Nos Clients Sont Satisfaits
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    Les avis de nos clients parlent d’eux-mêmes.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4 md:px-10">
                {reviews.map((r, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.08)]"
                    >
                        {/* User header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-semibold">
                                {r.name[0]}
                            </div>
                            <div>
                                <p className="font-semibold">{r.name}</p>
                                <p className="text-xs text-gray-500">{r.date}</p>
                            </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 text-yellow-400 text-lg mb-2">
                            {"★".repeat(r.stars)}
                        </div>

                        {/* Review text */}
                        <p className="text-sm text-gray-700 leading-relaxed">{r.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
