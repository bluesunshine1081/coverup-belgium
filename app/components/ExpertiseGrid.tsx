"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const items = [
    "Une équipe expérimentée, formée aux techniques les plus actuelles.",
    "Une exécution minutieuse, pour une finition nette et parfaitement maîtrisée.",
    "Un niveau d’exigence constant, garant d’un rendu premium sur chaque véhicule.",
    "Des films haut de gamme choisis pour leur résistance, leur tenue dans le temps et leur esthétique.",
    "Un conseil personnalisé, pour sélectionner la teinte, la texture et la finition idéales.",
    "Une offre complète pour particuliers et professionnels, avec une approche sur mesure.",
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
                    CoverUp Belgium
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Une expertise d’exception en Belgique
                </h2>


                <p className="text-sm text-slate-600 mb-10">
                    Depuis plusieurs années, nous cultivons un savoir-faire exigeant dans l’univers du covering et de la protection automobile. Chaque réalisation est pensée comme une signature : sélection rigoureuse de films haut de gamme, maîtrise des gestes de pose et recherche constante d’une finition irréprochable. Qu’il s’agisse de sublimer les lignes de votre véhicule, d’affirmer une identité ou de préserver la carrosserie, nous accompagnons votre projet avec discrétion, précision et sens du détail.
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
                            {text}
                        </p>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
