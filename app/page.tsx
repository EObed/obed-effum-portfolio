import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Solutions from "@/components/solutions/Solutions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/projects/Projects";
import StructuredData from "@/components/StructuredData";
import type { Metadata } from "next";

// Kept on the page rather than the root layout so app/not-found.tsx, which
// inherits layout metadata, doesn't emit a canonical or contradict its own
// auto-injected noindex.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
  return (
    <div>
      <StructuredData />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
