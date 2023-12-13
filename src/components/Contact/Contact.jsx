import React from "react";
// @ts-ignore
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p> Feel free to reach out </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:jigcho27@email.com">jigcho27@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/jigmec/">
            linkedin.com/in/jigmec
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/jchodon">github.com/jchodon</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
