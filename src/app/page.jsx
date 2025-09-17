import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
    </main>
  );
}
