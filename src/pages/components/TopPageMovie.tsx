import React from "react";
import styles from "../../styles/Home.module.css";

function TopPageMovie() {
  return (
    <div className={styles.kajimoviecontainer}>
      <video
        className={styles.kajimovie}
        src="/kajitop.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

export default TopPageMovie;
