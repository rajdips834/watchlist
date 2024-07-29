import React from "react";
import styles from "./PlaylistDetails.module.css";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/MyContext";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import CardList from "../../lists/cardList/CardList";
const PlaylistDetails = () => {
  const navigate = useNavigate();
  const { playlists, setPlaylists, selectedItem } = useContext(myContext);
  let { id } = useParams();
  id = id.substring(3);
  const playlist = playlists.filter((item) => item.id === id);

  const onRemove = (selectedItem) => {
    const updatedPlaylists = playlists.map((playlist) => {
      if (playlist.id === id) {
        return {
          ...playlist,
          movies: playlist.movies.filter(
            (movie) => movie.imdbID !== selectedItem
          ),
        };
      }
      return playlist;
    });
    setPlaylists(updatedPlaylists);
  };
  return (
    <>
      <FaHome
        onClick={() => navigate("/")}
        color="white"
        className={styles.home}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>{playlist?.title}</h1>
        {playlist && (
          <CardList
            onRemove={onRemove}
            isPlaylist={true}
            movieList={playlist[0].movies}
          />
        )}
      </div>
    </>
  );
};

export default PlaylistDetails;
