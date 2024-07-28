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

  const { playlists } = useContext(myContext);
  const { id } = useParams();
  const playlist = playlists.filter((playlist) => playlist.id != id);
  return (
    <>
      <FaHome
        onClick={() => navigate("/")}
        color="white"
        className={styles.home}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>{playlist[0].Title}</h1>
        <CardList movieList={playlist[0].Movies} />
      </div>
    </>
  );
};

export default PlaylistDetails;
