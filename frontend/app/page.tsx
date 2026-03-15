import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-[#111111]">
      <Navbar />
      <Hero />
      <Projects />
      <AboutSection />
      <Footer />
    </main>
  );
}
