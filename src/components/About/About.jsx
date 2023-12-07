// @ts-ignore
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import React from "react";

function About() {
  return (
    <section className={styles.container}>
      <h2> About Me </h2>
      <div>
        <img
          src={getImageUrl("about/fairy.png")}
          alt="cottage picture for the portfolio site"
          className={styles.img}
        />
        <ul>
          <li>
            <img src={getImageUrl("about/servericon.png")} alt="cursor icon" />
            <div>
              <h3>FullStack Developer</h3>
              <p>
                As a full-stack developer, I blend front-end elegance with
                back-end efficiency, creating responsive and optimized web
                applications that deliver both functionality and visual appeal.
              </p>
            </div>
          </li>
          <li>
            <img
              src={getImageUrl("about/crochet.png")}
              alt="yarn with hooks icon"
            />
            <div>
              <h3>Creative Thinker</h3>
              <p>
                Beyong code, my creativity flourishes in crochet, a hobby that
                intertwines the threads of creativity and precicion- much like
                my approach to coding and design.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
