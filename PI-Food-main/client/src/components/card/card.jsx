import styles from "./card.module.css";
import React from "react";

export default function Card({title , image , summary }) {




  return (
    <div className={styles.container}>
      <div className={styles["card-container"]}>
      
        <div className={styles["button"]}>
        <p>X</p>
        </div>
        <div className={styles["container--img"]}>
          <img src={image} alt="img not found" width="200px" height="250px"  />
        </div>
        <div className={styles["container--info"]}>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}


