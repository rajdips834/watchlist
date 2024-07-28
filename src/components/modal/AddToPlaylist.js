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

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const addToPlaylist = (movie, playlistId) => {
    const newPlaylist = playlists.map((item) => {
      if (item.id === playlistId) {
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
              <Button
                onClick={() => setCreatePlaylistModalVisible(true)}
                width={"100%"}
                text={"+ Create a playlist"}
              />
              <button onClick={handleClose}>Close</button>
            </>
          </div>
        </div>
      )}
    </>
  );
}
