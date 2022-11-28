import styles from "./Project.module.css";
import Image from "next/image";
import screenshot from "../../public/img/screenshot.png";
import Link from "next/link";

export type Tproject = {
  title: string;
  description: string;
  media: string;
  width: number;
  height: number;
  finishedDate: Date;
  URL: string;
};

type Tprops = {
  project: Tproject;
};

export default function Project(props: Tprops) {
  return (
    <div className={styles.project__container}>
      <h1 className={styles.projectTitle}>{props.project.title}</h1>
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={styles.projectTitle}
          className={styles.projectImage}
          src={props.project.media}
        />
      </div>
      <p>{props.project.description}</p>
      <div className={styles.linkContainer}>
        <Link href={props.project.URL} className={styles.link}>
          {getProperLinkTitle(props.project.URL)}
        </Link>
        <p className={styles.date}>
          {props.project.finishedDate.toDateString()}
        </p>
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
