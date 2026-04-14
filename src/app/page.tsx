import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Collaborations from "@/components/sections/Collaborations";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Works from "@/components/sections/Works";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collaborations />
        <Services />
        <Pricing />
        <FAQ />
        <Works />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
