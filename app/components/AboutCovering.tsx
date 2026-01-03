"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function AboutCovering() {
    return (
        <section id="about" className="py-20 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* IMAGE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <img
                        src="/images/Section-2.png"
                        alt="Covering Bruxelles"
                        className="rounded-lg shadow-lg object-cover"
                    />

                </motion.div>

                {/* TEXTE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.1 }}
                >
                    <p className="text-[13px] uppercase tracking-[0.22em] text-[#d62458] mb-2">
                        CoverUp Belgium
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Expert du covering automobile en Belgique
                    </h2>

                    <p className="text-sm leading-relaxed text-slate-700 mb-4">
                        Depuis plus d’une décennie, nous accompagnons aussi bien les particuliers que les entreprises dans la personnalisation et la protection de leurs véhicules. Spécialistes du covering et des films de protection, nous concevons des solutions sur mesure, esthétiques et totalement réversibles, tout en respectant la carrosserie d’origine. Qu’il s’agisse de donner un nouveau style, d’affirmer le caractère du véhicule ou de préserver sa peinture, notre équipe met son expertise au service de votre projet.
                    </p>

                    <p className="text-sm leading-relaxed text-slate-700">
                        Notre méthode s’appuie sur un suivi précis à chaque étape : échange sur le rendu attendu, choix des finitions (mat, satiné, brillant, etc.), préparation rigoureuse des surfaces et application réalisée dans les règles de l’art pour un résultat soigné. Nous sélectionnons uniquement des matériaux reconnus pour leur résistance et leur conformité aux exigences d’homologation. Objectif : un covering propre, durable et parfaitement adapté à vos attentes.
                    </p>

                </motion.div>
            </div>
        </section>
    );
}
