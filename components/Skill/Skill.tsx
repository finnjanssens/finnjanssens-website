import styles from "./Skill.module.css";

type SkillProps = {
  skill: string;
  score: number;
  width: number;
  repeat: number;
  fontSize: number;
  id: string;
};

export default function Skill(props: SkillProps) {
  const viewbox = `0 0 ${props.width} ${props.width}`;
  const marqueeString = `${props.skill} • `;
  const r = props.width / 2 - props.width * 0.1;
  return (
    <div
      className={styles.skillContainer}
      style={{
        position: "relative",
        width: props.width,
        height: props.width,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p className={styles.hoverTitle}>{props.skill}</p>
      <svg
        viewBox={viewbox}
        width="100%"
        height="100%"
        className={styles.circleSVG}
      >
        <defs>
          <path
            id="circle"
            d={`        
        M 0, 100
        m 10, 10
        a ${props.width / 2},${props.width / 2} 0 1,1 ${props.width},0
        a ${props.width / 2},${props.width / 2} 0 1,1 -${props.width},0`}
          />
        </defs>
        <text className={styles.marqueeText}>
          <textPath
            xlinkHref="#circle"
            className={styles.circleTextPath}
            style={{ fontSize: `${props.fontSize}em` }}
          >
            {marqueeString.repeat(props.repeat)}
          </textPath>
        </text>
        <clipPath id={props.id + "-clipPath"}>
          <rect
            x="0"
            y={props.width * 0.1 + 2 * r * (1 - props.score)}
            width={props.width}
            height={r * 2}
          />
        </clipPath>
        <circle
          cx={props.width / 2}
          cy={props.width / 2}
          r={r}
          fill="white"
          clipPath={`url(#${props.id}-clipPath)`}
        />
        <circle
          cx={props.width / 2}
          cy={props.width / 2}
          r={props.width / 2 - props.width * 0.08}
          stroke="white"
          strokeWidth="3"
          fillOpacity={0}
        />
      </svg>
    </div>
  );
}
