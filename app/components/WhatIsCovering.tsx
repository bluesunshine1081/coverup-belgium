"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const items = [
    {
        icon: "🚗",
        title: "Personnalisation infinie",
        text: "Vous pouvez choisir une vaste gamme de couleurs, effets et finitions...",
    },
    {
        icon: "🎨",
        title: "Choix et couleur personnalisée",
        text: "Grâce à la personnalisation, le covering permet d’adapter l’apparence...",
    },
    {
        icon: "💰",
        title: "Coût abordable avec pose de qualité",
        text: "Le covering est bien moins coûteux qu’une peinture traditionnelle...",
    },
];

export default function WhatIsCovering() {
    return (
        <section className="py-20 bg-white text-slate-900">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center px-4"
            >
                <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">
                    Qu'est-ce que le covering ?
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-12">
                    {/* TODO : coller le texte exact */}
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-10 text-center">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-[#d62458] text-sm font-bold uppercase mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
