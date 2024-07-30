import React from "react";
import styles from "./PlaylistDetails.module.css";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/MyContext";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import CardList from "../../lists/cardList/CardList";
const PlaylistDetails = () => {
  let { id } = useParams();
  id = id.substring(3);
  const navigate = useNavigate();
  const { selectedItem } = useContext(myContext);
  const [playlists, setPlaylists] = React.useState(
    JSON.parse(localStorage.getItem("playlists")).filter(
      (playlist) => playlist.id === id
    )
  );

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
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  };
  return (
    <>
      <FaHome
        onClick={() => navigate("/")}
        color="white"
        className={styles.home}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>{playlists[0]?.title}</h1>
        {playlists && (
          <CardList
            onRemove={onRemove}
            isPlaylist={true}
            movieList={playlists[0]?.movies}
          />
        )}
      </div>
    </>
  );
};

export default PlaylistDetails;
