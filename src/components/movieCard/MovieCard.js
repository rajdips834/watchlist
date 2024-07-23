import React from "react";
import styles from "./MovieCard.module.css"; // Ensure this is the correct path
import { CiBookmarkPlus } from "react-icons/ci";

export default function MovieCard({
  image,
  title,
  year,
  rating,
  width,
  height,
  onClick,
}) {
  return (
    <div
      className={styles.card}
      style={{
        width: width ? width : "16rem",
        height: height ? height : "33rem",
      }}
    >
      <CiBookmarkPlus onClick={onClick} className={styles.bookmark} />

      <img src={image} className={styles.cardImgTop} alt={title} />
      <div className={styles.cardbody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardText}>Year:{year}</p>
      </div>
    </div>
  );
}
