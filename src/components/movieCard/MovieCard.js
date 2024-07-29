import React from "react";
import styles from "./MovieCard.module.css"; // Ensure this is the correct path
import { CiBookmarkPlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function MovieCard({
  image,
  title,
  year,
  rating,
  id,
  width,
  height,
  onBookmark,
  onClick,
  onRemove,
  isPlaylist,
}) {
  const handleRemove = () => {
    onRemove(id);
  };
  return (
    <div
      className={styles.card}
      style={{
        width: width ? width : "16rem",
        height: height ? height : "32rem",
      }}
    >
      <div className={styles.iconContainer}>
        <CiBookmarkPlus onClick={onBookmark} className={styles.bookmark} />
        {isPlaylist && (
          <IoClose className={styles.bookmark} onClick={handleRemove} />
        )}{" "}
      </div>
      <img
        onClick={onClick}
        src={image}
        className={styles.cardImgTop}
        alt={title}
      />
      <div className={styles.cardbody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardText}>Year:{year}</p>
      </div>
    </div>
  );
}
