import About from "@/components/About";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

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
