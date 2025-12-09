// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutCovering from "@/app/components/AboutCovering";
import ServicesCards from "@/app/components/ServicesCards";
import ExpertiseGrid from "@/app/components/ExpertiseGrid";
import RealisationsCarousel from "@/app/components/RealisationsCarousel";
import Testimonials from "@/app/components/Testimonials";
import WhyServices from "@/app/components/WhyServices";
import CoveringPro from "@/app/components/CoveringPro";
import CoveringParticulier from "@/app/components/CoveringParticulier";
import DarkBanner from "@/app/components/DarkBanner";
import WhatIsCovering from "@/app/components/WhatIsCovering";
import AddElegance from "@/app/components/AddElegance";
import ContactFormFull from "@/app/components/ContactFormFull";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[var(--bg-dark)]">
            <Header />
            <Hero />
            <AboutCovering />
            <ServicesCards />
            <ExpertiseGrid />
            <RealisationsCarousel />
            <Testimonials />
            <WhyServices />
            <CoveringPro />
            <CoveringParticulier />
            <WhatIsCovering />
            <DarkBanner />
            <AddElegance />
            <ContactFormFull />
            <Footer />
        </main>
        );
}
