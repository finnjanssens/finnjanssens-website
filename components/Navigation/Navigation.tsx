import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navContainer}>
      <a href="#about__section">ABOUT</a>
      <a href="#skills__section">SKILLS</a>
      <a href="#projects__section">PROJECTS</a>
      <a href="#contact__section">CONTACT</a>
    </div>
  );
}
