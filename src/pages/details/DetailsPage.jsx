import React from "react";
import styles from "./DetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DetailsPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieData = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?i=${id.slice(3)}&plot=full&apikey=857f0a0`
      );
      console.log(res.data);
      setMovie(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img src={movie?.Poster} alt={`${movie?.Title} Poster`} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{movie?.Title}</h1>
        <p className={styles.info}>
          <strong>Year:</strong> {movie?.Year}
        </p>
        <p className={styles.info}>
          <strong>Genre:</strong> {movie?.Genre}
        </p>
        <p className={styles.info}>
          <strong>Director:</strong> {movie?.Director}
        </p>
        <p className={styles.info}>
          <strong>Actors:</strong> {movie?.Actors}
        </p>
        <p className={styles.info}>
          <strong>Plot:</strong> {movie?.Plot}
        </p>
        <p className={styles.info}>
          <strong>IMDB Rating:</strong> {movie?.imdbRating}
        </p>
        <p className={styles.info}>
          <strong>Box Office:</strong> {movie?.BoxOffice}
        </p>
      </div>
    </div>
  );
}
