"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import { img } from "framer-motion/client";

export default function AboutCovering() {
    return (
        <section className="py-20 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* IMAGE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <img
                        src="https://images.pexels.com/photos/6870326/pexels-photo-6870326.jpeg"
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
                        Covering Bruxelles
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Votre spécialiste covering à Bruxelles
                    </h2>

                    <p className="text-sm leading-relaxed text-slate-700 mb-4">
                        Depuis plus de 10 ans, nous accompagnons particuliers et professionnels dans
                        la transformation et la protection de leurs véhicules. Grâce à notre expertise
                        en covering et en films de protection, nous proposons des solutions personnalisées,
                        esthétiques et entièrement réversibles, sans jamais altérer la carrosserie d’origine.
                        Que ce soit pour moderniser l’apparence de votre véhicule, renforcer son caractère
                        ou préserver sa peinture, notre équipe met tout son savoir-faire à votre service.
                    </p>

                    <p className="text-sm leading-relaxed text-slate-700">
                        Notre démarche repose sur un accompagnement sur mesure à chaque étape : définition
                        du rendu souhaité, sélection des finitions (mate, satinée, brillante), préparation
                        minutieuse de la surface et pose professionnelle assurant un résultat durable.
                        Nous utilisons exclusivement des matériaux de qualité, reconnus pour leur résistance
                        et leur conformité aux normes d’homologation. Faites confiance à notre expertise
                        pour obtenir un covering impeccable, durable et parfaitement adapté à vos attentes.
                    </p>

                </motion.div>
            </div>
        </section>
    );
}
