// components/Realisations.tsx
"use client";

import { motion } from "framer-motion";
import { fadeScale, fadeUp } from "../lib/motion";

const faqs = [
    {
        q: "Le covering est-il réversible ?",
        a: "Oui, le film peut être retiré par un professionnel, en général sans laisser de trace sur la peinture d'origine si elle était en bon état.",
    },
    {
        q: "Combien de temps dure un covering ?",
        a: "Selon la qualité du film et l'entretien, un covering peut tenir entre 3 et 7 ans.",
    },
    {
        q: "Faut-il déclarer le covering à l'assurance ?",
        a: "Pour un simple changement de couleur sans modification technique, il suffit souvent d'en informer votre assureur. En cas de doute, demandez-lui directement.",
    },
];

export default function Realisations() {
    return (
        <section
            id="testimonials"
            className="py-16 md:py-24 bg-[var(--bg-section)]/95 border-y border-white/5"
        >
            <div className="container mx-auto grid gap-10 px-5 lg:grid-cols-2 lg:items-start">
                {/* Bloc avis */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
          <span className="inline-flex items-center rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-primary)]">
            Avis clients
          </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                        Une clientèle fidèle à Bruxelles et alentours
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-slate-400">
                        Cette section modernise les avis présents sur le site d&apos;origine
                        avec un focus plus clair sur la satisfaction.
                    </p>

                    <motion.div
                        className="mt-6 space-y-4"
                        variants={fadeScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="rounded-3xl border border-white/10 bg-[var(--bg-dark)]/80 p-5 shadow-[var(--shadow-soft)]">
                            <p className="text-sm text-slate-200">
                <span className="text-[var(--color-primary)] font-semibold">
                  “
                </span>{" "}
                                Travail très propre sur ma BMW, respect des délais et très bons
                                conseils sur le choix de la finition. Je recommande sans hésiter.
                                <span className="text-[var(--color-primary)] font-semibold">
                  ”
                </span>
                            </p>
                            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                <span>Samir – BMW M3</span>
                                <span className="text-amber-300">★★★★★</span>
                            </div>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-[var(--bg-dark)]/70 p-5">
                            <p className="text-sm text-slate-200">
                <span className="text-[var(--color-primary)] font-semibold">
                  “
                </span>{" "}
                                Résultat nickel sur ma Tesla, le PPF est invisible et la voiture
                                est beaucoup plus simple à entretenir.
                                <span className="text-[var(--color-primary)] font-semibold">
                  ”
                </span>
                            </p>
                            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                <span>Julie – Tesla Model 3</span>
                                <span className="text-amber-300">★★★★★</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* FAQ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.05 }}
                    className="space-y-4"
                >
                    <h3 className="text-xl md:text-2xl font-semibold">
                        Questions fréquentes
                    </h3>
                    <p className="text-sm md:text-base text-slate-400">
                        Un résumé des questions que les clients posent le plus souvent à
                        propos du covering et du PPF.
                    </p>

                    <div className="space-y-3">
                        {faqs.map((item, i) => (
                            <motion.details
                                key={item.q}
                                className="group rounded-2xl border border-white/10 bg-[var(--bg-dark)]/70 px-4 py-3 text-sm"
                                variants={fadeScale}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.06 * i }}
                            >
                                <summary className="cursor-pointer list-none text-slate-100 flex items-center justify-between gap-2">
                                    <span>{item.q}</span>
                                    <span className="text-xs text-slate-400 group-open:rotate-90 transition">
                    ▶
                  </span>
                                </summary>
                                <p className="mt-2 text-xs md:text-sm text-slate-400">
                                    {item.a}
                                </p>
                            </motion.details>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
