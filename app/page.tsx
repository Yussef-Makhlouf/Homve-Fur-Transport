import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularDistricts from "@/components/PopularDistricts";
import Services from "@/components/Services";
import ServicesDescription from "@/components/ServicesDescription";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <ServicesDescription />
      <PopularDistricts />
      <FAQ />
      <Footer />
    </main>
  )
}

