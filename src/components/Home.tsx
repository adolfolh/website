import Hero from "@/components/Hero";
import StickyNav from "@/components/StickyNav";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="min-h-svh flex flex-col">
        <Hero />
        <StickyNav />
      </div>
      <About />
      <Contact />
      <Footer />
    </main>
  );
} 