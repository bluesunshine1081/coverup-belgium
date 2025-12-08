"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const items = [
    "Professionnalisme",
    "Produits haut de gamme",
    "Qualité de travail",
    "Service clientèle attentif",
    "Sécurité",
    "Expertise de 10 ans en covering",
    "Garantie de résultat",
    "Large gamme de prestations"
];

export default function ExpertiseGrid() {
    return (
        <section className="py-20 bg-white text-slate-900">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto px-4"
            >
                <p className="text-[13px] uppercase tracking-[0.22em] text-[#d62458] mb-2">
                    Covering Bruxelles
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Une expertise inégalée à Bruxelles
                </h2>

                <p className="text-sm text-slate-600 mb-10">
                    {/* Texte à coller depuis le site */}
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
                {items.map((text, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-4"
                    >
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#d62458] text-white font-bold">
                            ✓
                        </div>
                        <p className="text-sm text-slate-700">
                            {/* Coller texte exact du site */}
                            {text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
