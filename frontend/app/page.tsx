import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Builder from "./components/Builder";
import FundingCTA from "./components/FundingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <Builder />
      <FundingCTA />
      <Footer />
    </main>
  );
}
