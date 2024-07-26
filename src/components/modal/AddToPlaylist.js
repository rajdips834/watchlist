// src/components/AddToPlaylistModal.js
import React, { useContext } from "react";
import myContext from "../../context/MyContext";
import "./AddToPlaylist.css";

export default function AddToPlaylist() {
  const { isModalVisible, setIsModalVisible, selectedItem } =
    useContext(myContext);

  if (!isModalVisible) return null;

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add to Playlist</h2>
        <p>Do you want to add {selectedItem} to your playlist?</p>
        <button onClick={handleClose}>Close</button>
        <button
          onClick={() => {
            handleClose();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
