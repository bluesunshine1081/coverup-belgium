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
                    Pourquoi et quand faire appel à nos services
                </h2>

                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    Pour s’il s’agit d’une reprise (back to stock) ou d’un changement de couleur, nous mettons tout
                    notre savoir-faire à votre service. Grâce à nos techniques de covering modernes, vous avez la possibilité
                    de bénéficier d'un rendu propre et professionnel. Cette méthode évite la dévalorisation de votre véhicule,
                    et offre un coût bien inférieur à une peinture complète.
                </p>

                <ul className="text-left inline-block space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Vous souhaitez faire évoluer l’image de votre entreprise avec un design attrayant et sur-mesure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Vous souhaitez protéger votre carrosserie, tout en designant votre auto selon vos goûts grâce aux films vinyles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Votre auto mérite un style unique grâce au covering qui offrira une jolie finition et une protection durable.</span>
                    </li>
                </ul>

                <p className="text-sm text-slate-700 leading-relaxed mt-6">
                    Contactez-nous afin d’obtenir plus d’informations. Nous accompagnons autant les clients professionnels
                    que particuliers. Que ce soit pour un total covering, un semi covering, un lettrage ou un simple film
                    protecteur (PPF), notre équipe vous garantit un travail de qualité et des délais rapides.
                    Grâce à notre expérience, nous vous guidons vers les meilleures solutions selon votre projet,
                    vos besoins et votre budget.
                </p>
            </motion.div>
        </section>
    );
}

