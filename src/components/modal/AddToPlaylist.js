// src/components/AddToPlaylistModal.js
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
  } = useContext(myContext);
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  if (!isModalVisible) return null;

  const handleClose = () => {
    setIsModalVisible(false);
    setCreatePlaylistModal(false);
  };

  const addToPlaylist = (movie, playlist) => {
    const newPlaylist = playlists.map((item) => {
      if (item.Title === playlist.Title) {
        return {
          ...item,
          Movies: [...item.Movies, movie],
        };
      }
      return item;
    });
    setPlaylists(newPlaylist);
    handleClose();
  };

  const handleCreatePlaylist = () => {
    const newPlaylist = [
      ...playlists,
      { Title: playlistName, Movies: [selectedItem] },
    ];
    setPlaylists(newPlaylist);
    handleClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!createPlaylistModal ? (
          <>
            <h2>Add to Playlist</h2>
            <div className="playlistContainer">
              <Playlists playlists={playlists} />
            </div>
            <Button
              onClick={() => setCreatePlaylistModal(true)}
              width={"100%"}
              text={"+ Create a playlist"}
            />
            <button onClick={handleClose}>Close</button>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}
