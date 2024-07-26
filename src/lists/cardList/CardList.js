import React from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import styles from "./CardList.module.css";
import MyContext from "../../context/MyContext";
import { useContext } from "react";
export default function CardList({ movieList, width }) {
  const myContext = useContext(MyContext);
  const { setIsModalVisible, setSelectedItem } = myContext;
  const handleBookmarkClick = (movie) => {
    setIsModalVisible(true);
    setSelectedItem(movie.Title);
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
