"use client";

import { motion } from "framer-motion";
import { fadeScale } from "../lib/motion";

const prestations = [
    {
        title: "Covering voiture Bruxelles",
        text: "Covering complet, partiel, couleurs mates, brillantes, satinées, etc.",
    },
    {
        title: "Covering moto Bruxelles",
        text: "Habillage complet ou partiel de moto, casques, éléments spécifiques.",
    },
    {
        title: "Covering publicitaire / lettrage",
        text: "Habillage de flotte, utilitaires, lettrage camionnette, etc.",
    },
    {
        title: "Vitres teintées & PPF",
        text: "Teintes homologuées, films de protection carrosserie (PPF).",
    },
];

export default function PrestationsList() {
    return (
        <section className="py-10 md:py-14 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
                {prestations.map((p, i) => (
                    <motion.article
                        key={p.title}
                        className="flex gap-4"
                        variants={fadeScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.05 * i }}
                    >
                        <div className="mt-1 h-8 w-8 rounded-full border border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] text-sm">
                            ✓
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold mb-1">
                                {p.title}
                            </h3>
                            <p className="text-sm text-slate-600">
                                {/* TODO: remplacer par le texte exact du site si tu veux le mot à mot */}
                                {p.text}
                            </p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
