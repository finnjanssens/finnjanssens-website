import styles from "./Terminal.module.css";
import { Circle } from "react-feather";

export default function Terminal() {
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.topBar}>
        <Circle size={10} />
        <Circle size={10} />
        <Circle size={10} />
      </div>
      <p>{"guest @ finnjanssens.be >"}</p>
    </div>
  );
}
