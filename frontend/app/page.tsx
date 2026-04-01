import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PokerStory from "./components/PokerStory";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-[#111111]">
      <Navbar />
      <Hero />
      <PokerStory />
      <Projects />
      <AboutSection />
      <Footer />
    </main>
  );
}
