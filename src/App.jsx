// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Projects from "./components/projects/projects";
import Experience from "./components/Experience/Experience";
// @ts-ignore
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
