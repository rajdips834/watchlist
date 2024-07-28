import React from "react";
import { useContext } from "react";
import AddToPlaylist from "./AddToPlaylist";
import CreatePlaylistModal from "./CreatePlaylistModal";
import myContext from "../../context/MyContext";
export default function Wrapper() {
  const { isModalVisible, createPlaylistModalVisible } = useContext(myContext);
  return (
    <>
      {createPlaylistModalVisible == false ? (
        <AddToPlaylist />
      ) : (
        <CreatePlaylistModal />
      )}
    </>
  );
}
