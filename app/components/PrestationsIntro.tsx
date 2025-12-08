"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function PrestationsIntro() {
    return (
        <section
            id="prestations"
            className="py-12 md:py-16 bg-white text-slate-900"
        >
            <motion.div
                className="max-w-4xl mx-auto px-4 md:px-6 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="relative inline-block mb-4">
          <span className="px-6 py-1 border-y border-slate-300 text-xs tracking-[0.25em] uppercase">
            COVERING BRUXELLES
          </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                    Nos prestations
                </h2>

                <p className="text-sm md:text-base text-slate-600">
                    {/* TODO: coller ici le paragraphe "Pour accroître la visibilité de votre marque..." */}
                </p>
            </motion.div>
        </section>
    );
}
