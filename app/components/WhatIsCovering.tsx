"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const items = [
    {
        icon: "🚗",
        title: "Personnalisation sans limite",
        text: "Accédez à un vaste choix de couleurs, d’effets et de finitions pour créer un rendu qui vous ressemble.",
    },
    {
        icon: "🎨",
        title: "Teinte et finition sur mesure",
        text: "Le covering s’adapte à votre style : discret, sportif ou audacieux, avec une signature visuelle parfaitement maîtrisée.",
    },
    {
        icon: "💰",
        title: "Alternative maîtrisée, finition premium",
        text: "Une solution généralement plus accessible qu’une peinture traditionnelle, avec une pose professionnelle et un résultat haut de gamme.",
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
                    Le covering automobile consiste à poser un film adhésif premium sur tout ou partie de la carrosserie afin de sublimer l’esthétique du véhicule ou de préserver la peinture d’origine. Entièrement réversible, cette solution offre une finition soignée sans passer par une peinture définitive, souvent plus onéreuse. Grâce à une large sélection de teintes, textures et finitions, le covering permet une personnalisation élégante, durable et parfaitement adaptée à vos envies.
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
