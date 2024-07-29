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
  } = useContext(myContext);
  const handleClose = () => {
    setIsModalVisible(false);
  };
  const [playlistName, setPlaylistName] = useState("");

  const addToPlaylist = (movie, playlistId) => {
    const newPlaylist = playlists.map((item) => {
      if (item.id === playlistId) {
        if (item.Movies.find((m) => m.imdbID === movie.imdbID)) {
          return item;
        } else {
          return {
            ...item,
            Movies: [...item.Movies, movie],
          };
        }
      }
      return item;
    });
    setPlaylists(newPlaylist);
    handleClose();
  };
  const handleCreatePlaylist = () => {
    if (playlistName) {
      const newPlaylist = {
        id: playlists.length + 1,
        name: playlistName,
        Movies: [selectedItem],
      };
      setPlaylists([...playlists, newPlaylist]);
      setCreatePlaylistModalVisible(false);
      handleClose();
    }
  };

  return (
    <>
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
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
              <Button
                onClick={handleCreatePlaylist}
                width={"100%"}
                text={"Create Playlist"}
              />
              <button onClick={handleClose}>Close</button>
            </>
          </div>
        </div>
      )}
    </>
  );
}
