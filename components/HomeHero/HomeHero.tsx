import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <div className="fullscreen__container" id="home__section">
      <div id="home__hero">
        <svg
          viewBox="0 0 300 300"
          width="300"
          height="300"
          className={styles.circleSVG}
        >
          <defs>
            <path
              id="circle"
              d="
        M 0, 140
        m 10, 10
        a 140,140 0 1,1 280,0
        a 140,140 0 1,1 -280,0"
            />
          </defs>
          <text fontSize="17">
            <textPath xlinkHref="#circle" className={styles.circleTextPath}>
              Portfolio • Portfolio • Portfolio • Portfolio • Portfolio •
              Portfolio • Portfolio • Portfolio • Portfolio •
            </textPath>
          </text>
        </svg>
        <h1 className={styles.title1}>
          {/* <span className="light">PORTFOLIO</span> */}
          FI<span className="stretch">N</span>N
        </h1>
        <h1 className={styles.title2}>
          JANSS<span className="stretch">E</span>NS
        </h1>
      </div>
    </div>
  );
}
