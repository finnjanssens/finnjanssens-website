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
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="Author" content="Finn Janssens" key="author" />
        <meta
          name="description"
          content="Hi! I’m Finn, a student Multimedia and Creative Technology at Erasmus Colleges Brussels. I’m passionate about creating and love anything technology-related. During my education in Multimedia and Creative Technology I’ve grown a big interest for the front-end, the back-end and everything in between."
        />
        <title>Finn Janssens | Portfolio</title>
      </Head>
      <HomeHero />
      <About />
      <Skills />
      <Projects projects={projects} />
      {/* <Terminal /> */}
    </div>
  );
}
