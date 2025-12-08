"use client";

import { motion } from "framer-motion";
import { fadeScale, fadeUp } from "../lib/motion";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="py-16 bg-gradient-to-b from-[#111827] to-[#020617] text-white"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="relative inline-block mb-4">
            <span className="px-6 py-1 border-y border-white/40 text-xs tracking-[0.25em] uppercase">
              COVERING BRUXELLES
            </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                        Nous contacter
                    </h2>
                    <p className="text-sm md:text-base text-slate-200 mb-4">
                        {/* TODO: coller ici le texte long de la section contact */}
                    </p>

                    <div className="space-y-2 text-sm">
                        <p>
                            <strong>Adresse :</strong> Doornveld 112 Unité, Sphere Business
                            Park 1, 1731 Asse, Belgique
                        </p>
                        <p>
                            <strong>Téléphone :</strong>{" "}
                            <a
                                href="tel:+32473289842"
                                className="text-[var(--color-primary-light)]"
                            >
                                +32 4 73 28 98 42
                            </a>
                        </p>
                        <p>
                            <strong>Email :</strong>{" "}
                            <a
                                href="mailto:info@covering-bruxelles.be"
                                className="text-[var(--color-primary-light)]"
                            >
                                {/* TODO: mettre l’adresse exacte si tu veux */}
                                info@covering-bruxelles.be
                            </a>
                        </p>
                    </div>
                </motion.div>

                <motion.form
                    className="bg-black/60 border border-white/15 rounded-3xl p-6 space-y-4 shadow-[var(--shadow-soft)]"
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.1 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Ce formulaire reprend la structure du widget Elementor (nom, email, tel, message) */}
                    <Field label="Nom" name="nom" />
                    <Field label="E-mail" name="email" type="email" />
                    <Field label="Téléphone" name="telephone" />
                    <Field
                        label="Message"
                        name="message"
                        as="textarea"
                        rows={4}
                        placeholder="Décrivez votre projet de covering..."
                    />

                    <button
                        type="submit"
                        className="w-full rounded-full bg-[var(--color-primary)] py-2.5 text-sm font-semibold shadow-[var(--shadow-soft)] hover:bg-[var(--color-primary-dark)]"
                    >
                        Envoyer
                    </button>
                </motion.form>
            </div>
        </section>
    );
}

type FieldProps = {
    label: string;
    name: string;
    type?: string;
    as?: "input" | "textarea";
    rows?: number;
    placeholder?: string;
};

function Field({
                   label,
                   name,
                   type = "text",
                   as = "input",
                   rows = 3,
                   placeholder,
               }: FieldProps) {
    const common =
        "mt-1 w-full rounded-2xl border border-white/20 bg-black/50 px-3 py-2 text-sm outline-none text-slate-100 placeholder:text-slate-400 focus:border-[var(--color-primary)]";
    return (
        <label className="text-xs md:text-sm block">
            <span className="text-slate-200">{label}</span>
            {as === "textarea" ? (
                <textarea
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    className={common}
                />
            ) : (
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={common}
                />
            )}
        </label>
    );
}
