"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeScale } from "../lib/motion";

export default function AddElegance() {
    return (
        <section className="py-20 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT — TEXT */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d62458]">
                        Covering Bruxelles
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-2 mb-4">
                        Donnez une touche d’élégance à votre véhicule
                    </h2>

                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                        {/* TODO : texte exact */}
                    </p>
                </motion.div>

                {/* RIGHT — IMAGE */}
                <motion.img
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    src="https://www.covering-bruxelles.be/wp-content/uploads/2023/04/add-elegance.jpg"
                    alt="Élégance Covering"
                    className="rounded-lg shadow-xl"
                />
            </div>
        </section>
    );
}
