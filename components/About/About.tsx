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
          <svg
            viewBox="0 0 300 300"
            width="100%"
            height="120%"
            className={styles.circleSVG}
          >
            <defs>
              <path
                id="circle"
                d="
        M 0, 100
        m 10, 10
        a 100,100 0 1,1 200,0
        a 100,100 0 1,1 -200,0"
              />
            </defs>
            <text fontSize="17">
              <textPath xlinkHref="#circle" className={styles.circleTextPath}>
                ABOUT • ABOUT • ABOUT • ABOUT • ABOUT • ABOUT • ABOUT • ABOUT •
                ABOUT • ABOUT • ABOUT • ABOUT • ABOUT • ABOUT • ABOUT • ABOUT •
              </textPath>
            </text>
          </svg>
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
