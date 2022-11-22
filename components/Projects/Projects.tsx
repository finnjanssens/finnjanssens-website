import styles from "./Projects.module.css";
import Project from "../Project/Project";
import { Tproject } from "../Project/Project";

export default function Projects() {
  const project: Tproject = {
    title: "Test project 2022",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam optio dolores, facere quae veritatis amet nihil in neque? Cupiditate sed nihil doloribus asperiores saepe perferendis aperiam nesciunt praesentium velit optio!",
    finishedDate: new Date(),
    media: new URL(
      "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
    ),
    URL: new URL("https://finnjanssens.be"),
  };
  return (
    <div className="fullscreen__container">
      <div className={styles.projectsSectionContainer}>
        <h1 className="sectionTitle">
          PROJ<span className="stretch">E</span>CTS
        </h1>
        <div className={styles.projects__container}>
          <Project project={project} />
          <Project project={project} />
          <Project project={project} />
          <Project project={project} />
        </div>
      </div>
    </div>
  );
}
