import styles from "./Tag.module.css";

type Tprops = {
  name: string;
  bgColor: string;
};

export default function Tag(props: Tprops) {
  return (
    <div
      className={styles.tagContainer}
      style={{ backgroundColor: props.bgColor }}
    >
      <p className={styles.tagStyle}>{props.name}</p>
    </div>
  );
}
