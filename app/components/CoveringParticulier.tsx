"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeScale } from "../lib/motion";

export default function CoveringParticulier() {
    return (
        <section className="py-20 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* IMAGE LEFT WITH STRIPES */}
                <motion.div
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative order-2 md:order-1"
                >
                    <img
                        src="/images/section-covering-particuliers.png"
                        alt="Covering Particulier"
                        className="rounded-lg w-full shadow-xl relative z-10 object-cover"
                    />

                    <div className="absolute -left-5 top-0 w-3 h-full bg-[#d62458] rounded-lg"></div>
                    <div className="absolute -left-10 top-6 w-3 h-full bg-[#1a1a1a] rounded-lg"></div>
                </motion.div>

                {/* TEXT RIGHT */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="order-1 md:order-2"
                >
                    <h3 className="text-xl font-bold uppercase mb-4">
                        Covering véhicule particulier
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                        Le covering représente une solution idéale pour personnaliser l’apparence
                        de votre véhicule sans avoir recours à une peinture définitive. Que vous
                        souhaitiez adopter une finition matte, satinée, brillante ou un coloris plus
                        audacieux, cette technique permet de transformer votre voiture selon vos goûts,
                        tout en préservant la peinture d’origine. C’est une méthode esthétique,
                        réversible et particulièrement appréciée pour donner un style unique à votre auto.
                    </p>

                    <div className="text-sm space-y-3">
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <strong className="text-[#d62458]">Personnalisation infinie</strong>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <strong className="text-[#d62458]">Protection de la carrosserie</strong>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <strong className="text-[#d62458]">Coût réduit vs peinture</strong>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

