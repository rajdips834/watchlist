import React, { useContext, useState } from "react";
import myContext from "../../context/MyContext";
import "./AddToPlaylist.css";
import Playlists from "../../lists/playlist/Playlists";
import Button from "../button/Button";

export default function AddToPlaylist() {
  const {
    isModalVisible,
    setIsModalVisible,
    selectedItem,
    playlists,
    setPlaylists,
    setCreatePlaylistModalVisible,
    user,
  } = useContext(myContext);

  const handleClose = () => {
    setIsModalVisible(false);
  };
  const [playlistName, setPlaylistName] = useState("");
  const addToPlaylist = (movie, playlistId) => {
    const newPlaylists = playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        // Check if the movie already exists in the playlist
        if (!playlist.movies.some((m) => m.imdbID === movie.imdbID)) {
          return {
            ...playlist,
            movies: [...playlist.movies, movie],
          };
        }
      }
      return playlist;
    });

    setPlaylists(newPlaylists);

    console.log(playlists);
    handleClose();
  };
  function handleCreatePlaylist() {
    console.log(playlistName);
    if (playlistName.trim()) {
      const newPlaylist = {
        email: user ? user : "rajdips834@gmail.com",
        id: Math.random().toString(36).toString().substring(2, 9),
        title: playlistName,
        movies: [],
      };
      setPlaylists([...playlists, newPlaylist]);
      setPlaylistName("");
      console.log(playlists);
    } else {
      alert("Please enter a playlist name"); // Alert if no name is provided
    }
  }

  return (
    <>
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            {playlists.length > 0 && (
              <>
                <h2>Add to Playlist</h2>
                <div className="playlistContainer">
                  <Playlists
                    isModal={true}
                    onCardClick={(playlistId) =>
                      addToPlaylist(selectedItem, playlistId)
                    }
                    playlists={playlists}
                  />
                </div>
              </>
            )}
            <>
              <h2>Create Playlist</h2>
              <input
                style={{
                  width: "80%",
                  margin: "5px ",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                type="text"
                placeholder="Playlist Name"
                onChange={(e) => setPlaylistName(e.target.value)}
              />
              <button
                onChange={(e) => setPlaylistName(e.target.value)}
                onClick={handleCreatePlaylist}
              >
                Create Playlist
              </button>

              <button onClick={handleClose}>Close</button>
            </>
          </div>
        </div>
      )}
    </>
  );
}
