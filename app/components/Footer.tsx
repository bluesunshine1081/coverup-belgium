export default function Footer() {
    return (
        <footer className="bg-[#020617] text-slate-100 pt-12">
            {/* bloc haut à 4 colonnes */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-8 pb-10">
                <div>
                    <h3 className="text-lg font-semibold mb-3">À propos</h3>
                    <p className="text-sm text-slate-300">
                        {/* TODO: coller ici le petit paragraphe "Souhaitez-vous marquer votre personnalité..." */}
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>
                            <a href="tel:+32473289842" className="hover:text-white">
                                +32 4 73 28 98 42
                            </a>
                        </li>
                        {/* TODO: ajouter email et éventuellement horaire comme dans le footer */}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Covering Bruxelles</h3>
                    <ul className="space-y-1 text-sm text-slate-300">
                        <li>
                            <a
                                href="#realisations"
                                className="hover:text-white"
                            >
                                Nos réalisations
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-white"
                            >
                                Covering Voiture Belgique
                            </a>
                        </li>
                        <li>
                            <a
                                href="#prestations"
                                className="hover:text-white"
                            >
                                Nos prestations
                            </a>
                        </li>
                        {/* etc. – reprends la liste du footer si tu veux tout */}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Autres services</h3>
                    <ul className="space-y-1 text-sm text-slate-300">
                        <li>
                            <a
                                id="services"
                                className="hover:text-white"
                            >
                                Film de protection anti-rayures
                            </a>
                        </li>
                        <li>
                            <a
                                id="services"
                                className="hover:text-white"
                            >
                                Lettrage voiture
                            </a>
                        </li>
                        {/* etc. */}
                    </ul>
                </div>
            </div>

            {/* ligne copyright */}
            <div className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)]">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 text-xs md:text-sm text-center text-white">
                    © 2025 - Covering Bruxelles - Tous droits réservés - Doornveld 112
                    Unité, Sphere Business Park 1, 1731 Asse, Belgique
                </div>
            </div>
        </footer>
    );
}
