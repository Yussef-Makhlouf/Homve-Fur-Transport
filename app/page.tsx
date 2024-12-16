import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServiceCards from "@/components/ServiceCards";
import ServiceCardsWithImages from "@/components/ServiceCardsWithImages";
import { Contact } from "lucide-react";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServiceCardsWithImages />
      <About />
      <ServiceCards />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

