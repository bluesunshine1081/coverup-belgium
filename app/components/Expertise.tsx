"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function Expertise() {
    return (
        <section className="py-16 bg-white text-slate-900">
            <motion.div
                className="max-w-4xl mx-auto px-4 md:px-6 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="relative inline-block mb-4">
          <span className="px-6 py-1 border-y border-white/30 text-xs tracking-[0.25em] uppercase">
            COVERING BRUXELLES
          </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                    Une expertise inégalée à Bruxelles
                </h2>

                <p className="text-sm md:text-base text-slate-200">
                    {/* TODO: coller la phrase "En tant que leader du covering à Bruxelles, nous proposons..." */}
                </p>
            </motion.div>
        </section>
    );
}
