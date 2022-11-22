import styles from "./Project.module.css";
import Image from "next/image";
import screenshot from "../../public/img/screenshot.png";
import Link from "next/link";

export type Tproject = {
  title: string;
  description: string;
  media: URL;
  finishedDate: Date;
  URL: URL;
};

type Tprops = {
  project: Tproject;
};

export default function Project(props: Tprops) {
  return (
    <div className={styles.project__container}>
      <h1 className={styles.projectTitle}>FINAL SHOW 2022</h1>
      <div className={styles.imageContainer}>
        <Image
          className={styles.projectImage}
          src={screenshot}
          alt="screenshot"
          placeholder="empty"
        />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nam
        provident quod, nobis ipsa debitis molestias earum. Minus quo aliquam
        officia quasi. Dolor blanditiis voluptatem ipsam alias similique
        consectetur exercitationem?
      </p>
      <div className={styles.linkContainer}>
        <Link href={"finnjanssens.be"} className={styles.link}>
          finnjanssens.be
        </Link>
        <p className={styles.date}>21/11/2022</p>
      </div>
    </div>
  );
}
