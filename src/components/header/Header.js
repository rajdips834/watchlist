import React from "react";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div
      style={{
        borderRadius: "5px",
        borderColor: "red",
        paddingLeft: "10px",
        width: "40%",
      }}
    >
      <h1 className={styles.heading}>Welcome to Watchlist</h1>
      <h3 className={styles.subHeading}>
        Search for your favorite movies,add them to watchlists and share them
        with friends
      </h3>
      <h3 className={styles.subHeading}>
        Click the bookmark button to add a movie to a watchlist
      </h3>
      j
    </div>
  );
}
