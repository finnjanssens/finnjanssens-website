import HomeHero from "../components/HomeHero/HomeHero";
import About from "../components/About/About";

export default function HomePage() {
  return (
    <div className="home">
      <HomeHero />
      <About />
    </div>
  );
}
