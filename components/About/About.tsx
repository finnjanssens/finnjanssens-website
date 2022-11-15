import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import finn from "../../public/img/finn.png";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className="fullscreen__container" id="about">
      <IoIosArrowDown className={styles.scrollArrow} />
      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <Image alt="finn" src={finn} placeholder="empty" />
        </div>
        <div className={styles.textContainer}>
          <h1>
            AB<span className="stretch">O</span>UT M
            <span className="stretch">E</span>
          </h1>
          <p>
            Hi! I’m Finn, a student Multimedia and Creative Technology at
            Erasmus Colleges Brussels. I’m passionate about creating and love
            anything technology-related. During my education in Multimedia and
            Creative Technology I’ve grown a big interest for the front-end, the
            back-end and everything in between.
          </p>
        </div>
      </div>
    </div>
  );
}
