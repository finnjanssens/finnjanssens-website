import styles from "./Projects.module.css";
import Project from "../Project/Project";
import { Tproject } from "../Project/Project";

type Tprops = {
  projects: Tproject[];
};

export default function Projects(props: Tprops) {
  return (
    <div className="fullscreen__container" id="projects__section">
      <div className={styles.projectsSectionContainer}>
        <h1 className="sectionTitle">
          PROJ<span className="stretch">E</span>CTS
        </h1>
        <div className={styles.projects__container}>
          {props.projects &&
            props.projects.map((project, i) => {
              return <Project key={i} project={project} />;
            })}
        </div>
      </div>
    </div>
  );
}
