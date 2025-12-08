export default function DarkBanner() {
    return (
        <section
            className="py-16 text-white text-center relative bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://www.covering-bruxelles.be/wp-content/uploads/2023/04/dark-banner-pattern.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold uppercase mb-2">
                    Votre spécialiste covering à Bruxelles
                </h2>

                <p className="text-sm text-gray-200 mb-6">
                    Nous équipons et transformons votre véhicule pour refléter vos goûts et votre style.
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
