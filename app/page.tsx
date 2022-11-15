import Image from "next/image";
import finn from "../public/img/finn-1.png";
import HomeHero from "../components/HomeHero/HomeHero";

export default function HomePage() {
  return (
    <div className="home">
      <HomeHero></HomeHero>
    </div>
  );
}
