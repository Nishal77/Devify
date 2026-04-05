import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Collaborations from "@/components/sections/Collaborations";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collaborations />
        <Services />
        <Works />
      </main>
      <Footer />
    </>
  );
}
