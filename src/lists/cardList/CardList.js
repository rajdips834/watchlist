import React, { useEffect } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import styles from "./CardList.module.css";
import MyContext from "../../context/MyContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function CardList({ onRemove, movieList, width, isPlaylist }) {
  const myContext = useContext(MyContext);
  const { setIsModalVisible, setSelectedItem } = myContext;
  const handleBookmarkClick = (movie) => {
    setIsModalVisible(true);
    setSelectedItem(movie);
  };
  const handleRemove = (movie) => {
    onRemove(movie.imdbID);
  };
  const navigate = useNavigate();
  useEffect(() => {
    console.log("CardList rendered  ");
  }, [movieList]);
  return (
    <div className={styles.cardListContainer} style={{ width: width }}>
      {movieList?.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          id={movie.imdbID}
          year={movie.Year}
          title={movie.Title}
          image={movie.Poster}
          rating={movie.imdbRating}
          onBookmark={() => handleBookmarkClick(movie)}
          onClick={() => navigate(`/details/id=${movie.imdbID}`)}
          isPlaylist={isPlaylist}
          onRemove={() => handleRemove(movie)}
        />
      ))}
    </div>
  );
}
