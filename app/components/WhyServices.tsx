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
                    {/* TODO : Coller ici le texte exact du site */}
                </p>

                <ul className="text-left inline-block space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Vous souhaitez faire évoluer l’image de votre entreprise…</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Vous souhaitez protéger votre carrosserie…</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#d62458] text-lg font-bold">•</span>
                        <span>Votre auto mérite un style unique grâce au covering…</span>
                    </li>
                </ul>

                <p className="text-sm text-slate-700 leading-relaxed mt-6">
                    {/* TODO : Coller la suite du texte */}
                </p>
            </motion.div>
        </section>
    );
}
