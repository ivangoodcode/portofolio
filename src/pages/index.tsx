import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Faq from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <div className="bg-sand-500">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Faq />
      <Footer />
    </div>
  );
}
