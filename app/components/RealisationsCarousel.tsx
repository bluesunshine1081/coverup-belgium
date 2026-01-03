"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const images = [
    "/images/realisation-1.png",
    "/images/realisation-2.png",
    "/images/realisation-3.png",
    "/images/realisation-4.png",
    "/images/realisation-5.png",
    "/images/realisation-6.png",
    "/images/realisation-7.png",
    "/images/realisation-8.png",
    "/images/realisation-9.png",
    "/images/realisation-10.png",
    "/images/realisation-11.png",
];

export default function RealisationsCarousel() {
    return (
        <section id="realisations" className="bg-white py-20">
            {/* Title */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <p className="text-xs tracking-[0.2em] text-[#d62458] uppercase">
                    CoverUp Belgium
                </p>

                <h2 className="mt-2 text-2xl md:text-3xl font-semibold uppercase">
                    Nos Réalisations
                </h2>
            </motion.div>

            {/* Carousel (horizontal scroll like website) */}
            <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="inline-flex gap-4 px-4 md:px-10">
                    {images.map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            alt="Réalisation covering"
                            className="h-[280px] md:h-[420px] object-cover rounded-lg shadow-lg"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
