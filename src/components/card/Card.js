import React from "react";
import styles from "./card.module.css"; // Ensure this is the correct path

export default function Card({ image, title, year, rating, width, height }) {
  return (
    <div
      className={styles.card}
      style={{
        width: width ? width : "16rem",
        height: height ? height : "36rem",
      }}
    >
      <img src={image} className={styles.cardImgTop} alt={title} />
      <div className={styles.cardbody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardText}>Year:{year}</p>
        <p className={styles.cardText}>Rating:{rating}</p>
      </div>
    </div>
  );
}
