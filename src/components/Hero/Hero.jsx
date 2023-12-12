import React from "react";
import { getImageUrl } from "../../utils";
// @ts-ignore
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, my name is Jigme!</h1>
        <p className={styles.description}>
          I am a full-stack developer, based in Toronto, who is deeply committed
          to continuous learning in this evolving tech landscape.For me, each
          line of code is about bringing ideas to life and making technology
          more accessible and enjoyable for all.
        </p>
        <a href="mailto:jigcho27@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/HeroImage.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
