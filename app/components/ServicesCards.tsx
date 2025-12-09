"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const items = [
    {
        title: "SEMI COVERING",
        text: "Cette méthode consiste à appliquer une image, un logo, un texte ou un lettrage publicitaire sur une partie spécifique de votre véhicule ou moto.",
        img: "https://cdn.pixabay.com/photo/2016/11/29/04/17/wrapping-1869198_1280.jpg"
    },
    {
        title: "TOTAL COVERING",
        text: "L’objectif du total covering est de recouvrir entièrement la carrosserie d’un véhicule.",
        img: "https://cdn.pixabay.com/photo/2016/11/29/04/14/car-wrapping-1869188_1280.jpg"
    },
    {
        title: "LETTRAGE",
        text: "Idéal pour afficher vos coordonnées, un logo, une marque ou un message publicitaire sur votre voiture ou utilitaire.",
        img: "https://cdn.pixabay.com/photo/2017/01/13/22/07/plotter-1970474_1280.jpg"
    },
    {
        title: "VITRES TEINTÉES",
        text: "Pour améliorer le confort thermique et esthétique, nos films sont homologués et garantis 10 ans.",
        img: "https://cdn.pixabay.com/photo/2017/03/02/03/50/window-2103337_1280.jpg"
    },
    {
        title: "FILM DE PROTECTION ANTI-RAYURES",
        text: "Le PPF crée une seconde couche protectrice efficace contre les rayures et les impacts.",
        img: "https://cdn.pixabay.com/photo/2016/11/29/04/20/wrapping-1869200_1280.jpg"
    }
];




export default function ServicesCards() {
    return (
        <section className="py-10 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6 text-center mb-10">
                <p className="text-[13px] uppercase tracking-[0.22em] text-[#d62458] mb-2">
                    Covering Bruxelles
                </p>
                <h2 className="text-2xl md:text-3xl font-bold">Nos Services</h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-5 gap-4">
                {items.map((card, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative rounded-lg overflow-hidden shadow-lg text-left"
                    >
                        <img src={card.img} alt={card.title} className="w-full h-44 object-cover" />

                        <div className="absolute inset-0 bg-black/60 p-4 flex flex-col justify-end">
                            <h3 className="text-[#d62458] text-sm font-bold mb-1">
                                {card.title}
                            </h3>
                            <p className="text-xs text-slate-200">{card.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
