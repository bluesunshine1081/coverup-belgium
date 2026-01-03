"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const items = [
    {
        title: "SEMI COVERING",
        text: "Personnalisez une zone précise de votre véhicule (capot, toit, rétros, bandes, éléments de carrosserie) avec un film vinyle, pour un rendu sur mesure.",
        img: "/images/section-3-covering-partiel.png",
    },
    {
        title: "TOTAL COVERING",
        text: "Changez entièrement l’allure de votre véhicule grâce à un recouvrement complet, avec un large choix de teintes et de finitions haut de gamme.",
        img: "/images/section-3-total-covering.png",
    },
    {
        title: "LETTRAGE",
        text: "Mettez en avant votre nom, votre activité ou vos informations de contact avec un marquage clair et élégant, adapté aux voitures comme aux utilitaires.",
        img: "/images/section-3-lettrage.png",
    },
    {
        title: "VITRES TEINTÉES",
        text: "Gagnez en confort et en discrétion grâce à des films solaires de qualité, conçus pour améliorer l’esthétique et réduire l’échauffement à bord.",
        img: "/images/section-3-vitre-teintee.png",
    },
    {
        title: "FILM DE PROTECTION ANTI-RAYURES",
        text: "Protégez les zones exposées avec un film transparent conçu pour limiter les marques du quotidien (micro-rayures, gravillons, frottements).",
        img: "/images/section-3-film-rayure-protection.png",
    },
    {
        title: "CIEL ÉTOILÉ",
        text: "Créez une ambiance exclusive à l’intérieur avec un ciel étoilé personnalisé, réglé selon l’intensité, la couleur et le style souhaités.",
        img: "/images/section-3-ciel-etoile.png",
    },
    {
        title: "ÉLECTRONIQUE",
        text: "Optimisez votre véhicule avec des solutions électroniques sur mesure : amélioration audio, éclairage, options de confort et intégrations spécifiques.",
        img: "/images/section-3-electronique.png",
    },
    {
        title: "BODY KIT",
        text: "Affirmez le caractère de votre voiture avec l’installation de pièces et kits carrosserie, ajustés avec précision pour une finition irréprochable.",
        img: "/images/section-3-body-kit.png",
    },
    {
        title: "DETAILING",
        text: "Offrez à votre véhicule une remise à niveau esthétique complète, intérieur et extérieur, pour un rendu propre, net et valorisant.",
        img: "/images/section-3-detailing.png",
    },
    {
        title: "POLISSAGE",
        text: "Redonnez de la profondeur à la peinture en atténuant les défauts de surface et en retrouvant une brillance plus uniforme.",
        img: "/images/section-3-polissage.png",
    },
    {
        title: "LAVAGE",
        text: "Lavage soigné avec une méthode respectueuse des surfaces, pour un résultat impeccable sans agresser la peinture ni les finitions.",
        img: "/images/section-3-lavage.png",
    },
    {
        title: "TRAITEMENT CÉRAMIQUE",
        text: "Renforcez la protection et la brillance avec une couche céramique durable, facilitant l’entretien et améliorant la résistance aux agressions extérieures.",
        img: "/images/section-3-traitement-ceramique.png",
    },
];


export default function ServicesCards() {
    return (
        <section id="services" className="py-10 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto px-4 md:px-6 text-center mb-10">
                <p className="text-[13px] uppercase tracking-[0.22em] text-[#d62458] mb-2">
                    CoverUp Belgium
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
