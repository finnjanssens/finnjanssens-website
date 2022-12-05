import styles from "./Contact.module.css";
import { Send, Linkedin, GitHub } from "react-feather";

export default function Contact() {
  return (
    <div className="fullscreen__container" id="contact__section">
      <div className={styles.contactContainer}>
        <h1 className="sectionTitle">
          CONT<span className="stretch">A</span>CT
        </h1>
        <div>
          <Send size={46} />
          <a href="mailto:info@finnjanssens.be">info@finnjanssens.be</a>
        </div>
        <div>
          <Linkedin size={46} />
          <a
            style={{ marginTop: "0.5em" }}
            href="https://www.linkedin.com/in/finn-janssens-bb3186172/"
          >
            Finn Janssens
          </a>
        </div>
        <div>
          <GitHub size={46} />
          <a href="https://github.com/finnjanssens">@finnjanssens</a>
        </div>
      </div>
    </div>
  );
}
