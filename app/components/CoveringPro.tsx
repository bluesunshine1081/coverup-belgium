"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeScale } from "../lib/motion";

export default function CoveringPro() {
    return (
        <section id="prestations" className="py-20 bg-white text-slate-900">
            {/* Title */}
            <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-[0.22em] text-[#d62458]">
                    Covering Bruxelles
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold uppercase">
                    Nos prestations
                </h2>
                <p className="max-w-4xl mx-auto text-center text-sm text-slate-600 mt-2">
                    Pour les professionnels et les particuliers, nous proposons des solutions de covering adaptées
                    à tous les besoins : changement de couleur, total covering, semi covering, lettrage publicitaire,
                    vitres teintées ou encore film de protection PPF.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* TEXT LEFT */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold uppercase mb-4 text-[#1a1a1a]">
                        Covering véhicule professionnel
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                        Vous avez une entreprise et vous êtes à la recherche d’un moyen efficace de valoriser
                        votre image de marque tout en augmentant votre visibilité sur la route ? Grâce au covering
                        professionnel, vous transformez vos véhicules de société en supports de communication puissants.
                        L’habillage publicitaire permet de renforcer votre identité visuelle, d’améliorer la cohérence
                        de votre flotte et de capter l’attention instantanément.
                        C’est une solution durable, économique et totalement personnalisable.
                    </p>

                    <div className="space-y-3 text-sm text-slate-700">
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <strong className="text-[#d62458]">
                                Coûts réduits & image professionnelle renforcée
                            </strong>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <strong className="text-[#d62458]">
                                Publicité mobile efficace
                            </strong>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <strong className="text-[#d62458]">
                                Renforcer votre présence locale
                            </strong>
                        </div>
                    </div>
                </motion.div>

                {/* IMAGE RIGHT WITH RED STRIPES */}
                <motion.div
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img
                        src="/images/Section-nos-prestations.png"
                        alt="Covering professionnel"
                        className="rounded-lg shadow-xl relative z-10 object-cover"
                    />

                    {/* Red decorative stripes */}
                    <div className="absolute -right-5 top-0 w-3 h-full bg-[#d62458] rounded-lg"></div>
                    <div className="absolute -right-10 top-6 w-3 h-full bg-[#1a1a1a] rounded-lg"></div>
                </motion.div>
            </div>
        </section>
    );
}

