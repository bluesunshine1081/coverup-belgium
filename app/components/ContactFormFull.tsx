"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function ContactFormFull() {
    return (
        <section className="py-20 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">

                {/* LEFT — TEXT + LOGO */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img
                        src="logo.png"
                        className="h-12 mb-4"
                    />

                    <h3 className="text-xl font-bold uppercase mb-3">Nous contacter</h3>

                    <p className="text-sm text-slate-700 mb-6">
                        Pour toute demande de devis, renseignement ou projet de covering — que ce soit pour un véhicule personnel ou professionnel — n’hésitez pas à nous contacter.
                        Nous vous répondrons dans les 24 heures.
                        Vous pouvez nous appeler directement, envoyer un e-mail, ou remplir le formulaire ci-dessous : notre équipe vous accompagnera pour trouver la meilleure solution adaptée à vos besoins et votre budget.
                    </p>

                    <p className="text-sm">
                        <strong>Email : </strong>info@covering-bruxelles.be
                    </p>
                    <p className="text-sm">
                        <strong>Téléphone : </strong>
                        <a className="text-[#d62458]" href="tel:+32473289842">
                            +32 4 73 28 98 42
                        </a>
                    </p>
                </motion.div>

                {/* RIGHT — FORM */}
                <motion.form
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-[#0f0f0f] text-white p-6 rounded-lg border border-white/10 shadow-xl grid grid-cols-2 gap-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input type="text" placeholder="Nom" className="form-input" />
                    <input type="email" placeholder="Email" className="form-input" />
                    <input type="text" placeholder="Téléphone" className="form-input" />
                    <input type="text" placeholder="Prestation" className="form-input" />

                    <textarea
                        rows={4}
                        placeholder="Message"
                        className="col-span-2 form-input"
                    />

                    <button
                        type="submit"
                        className="bg-[#d62458] hover:bg-[#b51f4b] col-span-2 w-full py-3 rounded text-sm font-semibold"
                    >
                        Envoyer
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
