// src/pages/playlist/PlaylistDetails.js
import React from "react";
import styles from "./PlaylistDetails.module.css";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/MyContext";
import { useContext } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import { FaHome } from "react-icons/fa";

import CardList from "../../lists/cardList/CardList";
const PlaylistDetails = () => {
  const navigate = useNavigate();

  const { playlists, setPlaylists } = useContext(myContext);
  const { id } = useParams();

  const playlist = playlists.filter((playlist) => playlist.id != id);
  const onRemove = (movieId) => {
    if (playlist) {
      const updatedMovies = (playlist[0].Movies = playlist[0].Movies.filter(
        (movie) => movie.imdbID != id
      ));

      // Update the playlists array
      const updatedPlaylists = playlists.map((item) =>
        item.id === playlist.id ? { ...item, Movies: updatedMovies } : item
      );

      // Update the state
      setPlaylists(updatedPlaylists);
    }
  };
  return (
    <>
      <FaHome
        onClick={() => navigate("/")}
        color="white"
        className={styles.home}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>{playlist[0].Title}</h1>
        <CardList
          onRemove={onRemove}
          isPlaylist={true}
          movieList={playlist[0].Movies}
        />
      </div>
    </>
  );
};

export default PlaylistDetails;
