"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const items = [
    "Un professionnalisme constant, assuré par une équipe formée aux techniques les plus récentes du covering.",
    "Des produits haut de gamme, sélectionnés pour leur durabilité, leur résistance et leur rendu esthétique irréprochable.",
    "Un travail minutieux et soigné, réalisé dans le respect total de votre véhicule afin de garantir un résultat propre et durable.",
    "Un service clientèle attentif, capable de vous conseiller et de vous accompagner dans le choix du film et de la finition.",
    "Une expertise développée au fil des années, permettant d’assurer une pose précise et un résultat premium sur chaque projet.",
    "Une large gamme de prestations adaptées aux particuliers comme aux professionnels, pour répondre à chaque besoin spécifique.",
];

const text =
    "Nous vous offrons un service de covering précis et professionnel, réalisé avec des films de haute qualité garantissant une longue durée de vie, une excellente tenue des couleurs et une protection renforcée de votre véhicule.";


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
                    Depuis plusieurs années, notre équipe met à votre disposition un savoir-faire
                    reconnu dans le domaine du covering et de la protection de véhicules. Grâce à
                    une maîtrise précise des techniques de pose et une sélection rigoureuse de films
                    haut de gamme, nous garantissons un rendu impeccable, durable et parfaitement
                    adapté à vos besoins. Que ce soit pour personnaliser votre véhicule, renforcer
                    votre image professionnelle ou protéger votre carrosserie, nous vous accompagnons
                    avec sérieux et passion à chaque étape du projet.
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
