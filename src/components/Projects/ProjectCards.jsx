import React from "react";
import { getImageUrl } from "../../utils";
// @ts-ignore
import styles from "./ProjectCard.module.css";

function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div>
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        width="450px"
        height="450px"
      />
      <h3 className={styles.title}> {title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
