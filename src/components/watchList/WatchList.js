import React from "react";
import styles from "./WatchList.module.css";
import Search from "../search/Search";
import { FaHome } from "react-icons/fa";
import Button from "../button/Button";
import playlist from "../../movies.json";
import ListCard from "../listCard/ListCard";
import Playlists from "../../lists/playlist/Playlists";
import { Navigate } from "react-router-dom";
export default function WatchList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.watchListHeader}>WatchLists</h1>
      <Search
        fontsize={"5px"}
        text={"Search a Playlist"}
        width={"40%"}
        height={"20px"}
      />
      <Button
        backgroundColor="red"
        width="30%"
        height="40px"
        borderRadius="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="none"
        color="white"
        cursor="pointer"
        Icon={FaHome}
        text="Home"
      />{" "}
      <hr className={styles.divider} />
      <h2 className={styles.title}>My Lists</h2>
      <div className={styles.listsContainer}>
        <Playlists playlists={playlist.playlists} onCardClick={Navigate} />
      </div>
    </div>
  );
}
