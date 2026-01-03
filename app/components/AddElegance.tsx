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
                        CoverUp Belgium
                    </p>

                    <h2 className="text-2xl font-bold uppercase mt-2 mb-4">
                        Révélez le style de votre automobile
                    </h2>

                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                        Le covering permet de redéfinir l’apparence de votre voiture avec des finitions élégantes et résistantes. Du look discret au rendu plus affirmé, les films vinyles subliment les lignes du véhicule tout en préservant la peinture d’origine. Une approche esthétique et premium pour gagner en caractère et en originalité.
                    </p>
                </motion.div>

                {/* RIGHT — IMAGE */}
                <motion.img
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    src="/images/section-elegance-4.png"
                    alt="Élégance Covering"
                    className="rounded-lg shadow-xl object-cover"
                />
            </div>
        </section>
    );
}
