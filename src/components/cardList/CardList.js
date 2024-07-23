import React from "react";
import Card from "../card/Card";
import styles from "./CardList.module.css";

export default function CardList({ movieList }) {
  return (
    <div className={styles.cardListContainer}>
      {movieList?.map((movie) => (
        <Card
          key={movie.imdbID}
          year={movie.Year}
          title={movie.Title}
          image={movie.Poster}
          rating={movie.imdbRating}
        />
      ))}
    </div>
  );
}
