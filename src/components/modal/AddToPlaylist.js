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
    setCreatePlaylistModalVisible,
  } = useContext(myContext);
  const [playlistName, setPlaylistName] = useState("");

  if (!isModalVisible) return null;
  const handleClose = () => {
    setIsModalVisible(false);
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

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <>
          <h2>Add to Playlist</h2>
          <div className="playlistContainer">
            <Playlists
              onCardClick={(playlist) => addToPlaylist(selectedItem, playlist)}
              playlists={playlists}
            />
          </div>
          <Button
            onClick={() => setCreatePlaylistModalVisible(true)}
            width={"100%"}
            text={"+ Create a playlist"}
          />
          <button onClick={handleClose}>Close</button>
        </>
      </div>
    </div>
  );
}
