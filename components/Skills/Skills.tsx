import styles from "./Skills.module.css";
import Skill from "../Skill/Skill";

export default function Skills() {
  return (
    <div className="fullscreen__container" id="skills__section">
      <div className={styles.skillsSectionContainer}>
        <h1 className="sectionTitle">
          S<span className="stretch">K</span>ILLS
        </h1>
        <div className={styles.skillsContainer}>
          <Skill
            fontSize={0.845}
            repeat={11}
            score={0.9}
            skill="REACT"
            width={300}
            id="react"
          />
          <Skill
            fontSize={0.9}
            repeat={8}
            score={0.5}
            skill="ANGULAR"
            width={300}
            id="angular"
          />
          <Skill
            fontSize={0.905}
            repeat={12}
            score={0.8}
            skill="NODE"
            width={300}
            id="node"
          />
          <Skill
            fontSize={0.97}
            repeat={8}
            score={0.7}
            skill="LARAVEL"
            width={300}
            id="laravel"
          />
          <Skill
            fontSize={0.897}
            repeat={10}
            score={0.6}
            skill="KOTLIN"
            width={300}
            id="kotlin"
          />
          <Skill
            fontSize={0.905}
            repeat={9}
            score={0.4}
            skill="PYTHON"
            width={300}
            id="python"
          />
          <Skill
            fontSize={0.95}
            repeat={8}
            score={0.85}
            skill="ARDUINO"
            width={300}
            id="arduino"
          />
          <Skill
            fontSize={0.823}
            repeat={7}
            score={0.9}
            skill="PCB DESIGN"
            width={300}
            id="pcb-design"
          />
          <Skill
            fontSize={0.84}
            repeat={16}
            score={0.5}
            skill="PLC"
            width={300}
            id="plc"
          />
        </div>
      </div>
    </div>
  );
}
