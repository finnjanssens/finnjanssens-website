import styles from "./Tag.module.css";

type Tprops = {
  name: string;
};

export default function Tag(props: Tprops) {
  return (
    <div className={styles.tagContainer}>
      <p className={styles.tagStyle}>{props.name}</p>
    </div>
  );
}
