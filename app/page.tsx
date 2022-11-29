import HomeHero from "../components/HomeHero/HomeHero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import { fetcher } from "../services/api.service";
import { Tproject } from "../components/Project/Project";
import Head from "next/head";

export default async function HomePage() {
  const projectsResp = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?populate=*&sort=Score%3Adesc`
  );
  const projects: Tproject[] = projectsResp.map((project: any): Tproject => {
    return {
      title: project.attributes.Title,
      description: project.attributes.Description,
      finishedDate: new Date(project.attributes.FinishedDate),
      media: project.attributes.Image.data.attributes.url, //project.attributes.Media.data.attributes.formats.thumbnail.url
      URL: project.attributes.URL,
      width: project.attributes.Image.data.attributes.formats.small.width,
      height: project.attributes.Image.data.attributes.formats.small.height,
      tags: project.attributes.Tags,
    };
  });
  return (
    <div className="home">
      <HomeHero />
      <About />
      <Skills />
      <Projects projects={projects} />
      {/* <Terminal /> */}
    </div>
  );
}
