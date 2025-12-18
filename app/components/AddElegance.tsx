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
                        Grâce au covering, vous pouvez sublimer l’apparence de votre véhicule avec des
                        finitions élégantes et durables. Que vous optiez pour un style sobre, moderne ou
                        plus audacieux, les films vinyles permettent d’améliorer le look de votre voiture
                        tout en préservant sa peinture d’origine. Une solution idéale pour apporter du
                        caractère et une touche d’originalité à votre automobile.
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
