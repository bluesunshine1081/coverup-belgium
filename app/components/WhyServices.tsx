"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function WhyServices() {
    return (
        <section className="py-20 bg-white text-slate-900">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center px-4"
            >
                <h2 className="text-xl md:text-2xl font-bold uppercase mb-6">
                    Pourquoi et quand choisir nos services
                </h2>

                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    Qu’il s’agisse d’un retour à l’origine (back to stock) ou d’une nouvelle teinte, nous mettons notre expertise au service de votre véhicule. Nos techniques de covering actuelles permettent d’obtenir une finition nette et parfaitement maîtrisée, tout en préservant la valeur de votre automobile. C’est également une alternative plus accessible qu’une peinture complète, sans compromis sur l’élégance du rendu.
                </p>

                <ul className="text-left inline-block space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Vous souhaitez faire évoluer l’image de votre entreprise avec un design sur mesure, harmonieux et impactant.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Vous désirez protéger la carrosserie tout en personnalisant le véhicule grâce à des films vinyles premium.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Vous recherchez une signature esthétique unique, associée à une protection durable et à une finition soignée.</span>
                    </li>
                </ul>

                <p className="text-sm text-slate-700 leading-relaxed mt-6">
                    Pour en savoir plus, contactez-nous. Nous accompagnons particuliers et professionnels avec la même exigence. Total covering, semi-covering, lettrage, film de protection (PPF), etc : notre équipe s’engage sur une qualité d’exécution irréprochable et des délais maîtrisés. Grâce à notre expérience, nous vous orientons vers la solution la plus pertinente selon votre projet, vos attentes et votre budget.
                </p>
            </motion.div>
        </section>
    );
}

