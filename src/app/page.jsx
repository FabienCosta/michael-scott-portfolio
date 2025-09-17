import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
    </main>
  );
}
