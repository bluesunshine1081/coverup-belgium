"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

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
                        src="https://www.covering-bruxelles.be/wp-content/uploads/2023/04/covering-voiture-bruxelles.jpg"
                        alt="Covering Bruxelles"
                        className="rounded-lg shadow-lg"
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
                        {/* TODO : Coller ici le texte EXACT du site */}
                    </p>

                    <p className="text-sm leading-relaxed text-slate-700">
                        {/* TODO : Suite du paragraphe */}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
