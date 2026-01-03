"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import {useState} from "react";

export default function ContactFormFull() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        prestation: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setStatus("error");
                setErrorMsg(data.error || "Une erreur est survenue.");
                return;
            }

            setStatus("success");
            setForm({
                name: "",
                email: "",
                phone: "",
                prestation: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            setStatus("error");
            setErrorMsg("Une erreur réseau est survenue.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-white text-slate-900">
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
                        Vous envisagez un covering ou un film de protection ? Parlons de votre projet. Nous répondons sous 24 heures et vous accompagnons avec conseil et précision. Contact par téléphone, e-mail ou via le formulaire ci-dessous.
                    </p>

                    <p className="text-sm">
                        <strong>Email : </strong>info@covering-bruxelles.be
                    </p>
                    <p className="text-sm">
                        <strong>Téléphone : </strong>
                        <a className="text-[#d62458]" href="tel:+32483115525">
                            +32 4 83 11 55 25
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
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        className="form-input"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-input"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Téléphone"
                        className="form-input"
                        value={form.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="prestation"
                        placeholder="Prestation"
                        className="form-input"
                        value={form.prestation}
                        onChange={handleChange}
                    />

                    <textarea
                        rows={4}
                        name="message"
                        placeholder="Message"
                        className="col-span-2 form-input"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    {status === "success" && (
                        <p className="col-span-2 text-sm text-green-400">
                            Merci, votre message a bien été envoyé.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="col-span-2 text-sm text-red-400">
                            {errorMsg || "Une erreur est survenue, veuillez réessayer."}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-[#d62458] hover:bg-[#b51f4b] disabled:opacity-60 disabled:cursor-not-allowed col-span-2 w-full py-3 rounded text-sm font-semibold"
                    >
                        {status === "loading" ? "Envoi en cours..." : "Envoyer"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
