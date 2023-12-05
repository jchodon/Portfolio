// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";

// @ts-ignore
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
}

export default App;
