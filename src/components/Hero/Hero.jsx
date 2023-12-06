import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, I am Jigme</h1>
        <p>
          I am a full-stack developer currently based in Toronto. I am
          passionate about creating inclusive and interactive user experience.
        </p>
        <a href="mailto:jigcho27@gmail.com">Contact Me</a>
      </div>
      <img src={getImageUrl("hero/HeroImage.png")} alt="Hero Image of  me" />
      <div className={styles.topBlur} />
      <div className={styles.bottonbBlur} />
    </section>
  );
};

export default Hero;
