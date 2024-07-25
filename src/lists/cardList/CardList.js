import React from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import styles from "./CardList.module.css";

export default function CardList({ movieList, width }) {
  const handleBookmarkClick = (movie) => {
    console.log("clicked");
  };
  return (
    <div className={styles.cardListContainer} style={{ width: width }}>
      {movieList?.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          year={movie.Year}
          title={movie.Title}
          image={movie.Poster}
          rating={movie.imdbRating}
          onClick={() => handleBookmarkClick(movie)}
        />
      ))}
    </div>
  );
}
