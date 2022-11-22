import HomeHero from "../components/HomeHero/HomeHero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

export default function HomePage() {
  return (
    <div className="home">
      <HomeHero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
