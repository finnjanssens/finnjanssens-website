import styles from "./Project.module.css";
import Tag from "../Tag/Tag";
import Link from "next/link";

export type Tproject = {
  title: string;
  description: string;
  media: string;
  width: number;
  height: number;
  finishedDate: Date;
  URL: string;
  tags: string[];
};

type Tprops = {
  project: Tproject;
};

function getTagColor(tag: string): string {
  let colors = {
    React: "#61DBFB",
    Angular: "#B52E31",
    Arduino: "#00979C",
    Laravel: "#F05340",
    "Expert Lab": "#36f76a",
    Video: "#8629ff",
    "Next JS": "#0070f3",
  };

  return colors[tag] || "#fff";
}

export default function Project(props: Tprops) {
  return (
    <div className={styles.project__container}>
      <div className={styles.tagsContainer}>
        {props.project.tags ? (
          props.project.tags.map((tag, i) => {
            return (
              <Tag
                name={tag}
                key={props.project.title.replace(" ", "") + i}
                bgColor={getTagColor(tag)}
              />
            );
          })
        ) : (
          <Tag
            name="NO TAGS"
            key={props.project.title.replace(" ", "") + 1}
            bgColor="#000"
          />
        )}
      </div>
      <h1 className={styles.projectTitle}>{props.project.title}</h1>
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={props.project.title}
          className={styles.projectImage}
          src={props.project.media}
        />
      </div>
      <div className={styles.infoContainer}>
        <p>{props.project.description}</p>
        <div className={styles.linkContainer}>
          <a
            className={styles.link}
            target="_blank"
            href={props.project.URL}
            rel="noopener noreferrer"
          >
            {getProperLinkTitle(props.project.URL)}
          </a>
          <p className={styles.date}>
            {props.project.finishedDate.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

const getProperLinkTitle = (link: string) => {
  if (link.includes("youtube")) {
    return "Watch Video";
  } else if (link.includes("github")) {
    return "Github Repo";
  } else {
    return link.replace("https://", "");
  }
};
