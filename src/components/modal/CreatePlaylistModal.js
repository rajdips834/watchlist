import React, { useContext, useState } from "react";
import myContext from "../../context/MyContext";
import "./AddToPlaylist.css";
import Playlists from "../../lists/playlist/Playlists";
import Button from "../button/Button";

export default function CreatePlaylistModal() {
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const { selectedItem, playlists, setPlaylists, setIsModalVisible } =
    useContext(myContext);
  const handleClose = () => {
    setIsModalVisible(false);
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
    <div>
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
  );
}
