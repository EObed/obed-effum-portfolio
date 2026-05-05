import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
