"use client";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-40 bg-black/85 backdrop-blur-sm border-b border-black">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#hero" className="flex items-center">
                    <img
                        src="https://www.covering-bruxelles.be/wp-content/uploads/2023/03/1.png"
                        alt="Covering Bruxelles"
                        className="h-10 w-auto"
                    />
                </a>

                {/* Menu */}
                <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide text-white/80">
                    <a href="#hero" className="hover:text-white transition">
                        ACCUEIL
                    </a>
                    <a href="#prestations" className="hover:text-white transition">
                        COVERING
                    </a>
                    <a href="#realisations" className="hover:text-white transition">
                        RÉALISATIONS
                    </a>
                    <a href="#contact" className="hover:text-white transition">
                        CONTACT
                    </a>
                </nav>

                {/* CTA téléphone */}
                <a
                    href="tel:+32473289842"
                    className="hidden sm:inline-block bg-[#d62458] hover:bg-[#b51f4b] transition text-white text-[13px] px-5 py-2 rounded-full font-medium shadow-md"
                >
                    +32 4 73 28 98 42
                </a>
            </div>
        </header>
    );
}
