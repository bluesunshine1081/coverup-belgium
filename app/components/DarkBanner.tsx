export default function DarkBanner() {
    return (
        <section
            className="py-16 text-white text-center relative bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold uppercase mb-2">
                    Votre spécialiste covering à Bruxelles
                </h2>

                <p className="text-sm text-gray-200 mb-6 max-w-2xl mx-auto">
                    Spécialistes du covering automobile, nous transformons votre véhicule avec précision
                    et créativité. Que vous souhaitiez protéger votre carrosserie, moderniser son style
                    ou lui offrir une finition unique, nous mettons notre expertise à votre service pour
                    un résultat durable et irréprochable.
                </p>

                <div className="flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="bg-[#d62458] hover:bg-[#b51f4b] text-white px-6 py-3 rounded-full text-sm shadow-md"
                    >
                        Demander un devis
                    </a>

                    <a
                        href="tel:+32473289842"
                        className="border border-white/80 px-6 py-3 rounded-full text-sm hover:bg-white/10"
                    >
                        +32 4 73 28 98 42
                    </a>
                </div>
            </div>
        </section>
    );
}
