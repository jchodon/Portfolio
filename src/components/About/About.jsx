// @ts-ignore
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import React from "react";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> About Me </h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/servericon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                As a full-stack developer, I blend front-end elegance with
                back-end efficiency, creating responsive and optimized web
                applications that deliver both functionality and visual appeal.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/crochet.png")}
              alt="yarn with hooks icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Creative Thinker</h3>
              <p>
                Beyond code, my creativity flourishes in crochet/knit, a hobby
                that intertwines the threads of creativity and precicion- much
                like my approach to coding and design.
              </p>
            </div>
          </li>
        </ul>
        <img
          src={getImageUrl("about/fairy.png")}
          alt="cottage picture for the portfolio site"
          className={styles.img}
        />
      </div>
    </section>
  );
}

export default About;
