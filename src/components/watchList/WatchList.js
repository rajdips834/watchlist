import React, { useState } from "react";
import styles from "./WatchList.module.css";
import Search from "../search/Search";
import { FaBars, FaHome } from "react-icons/fa";
import Button from "../button/Button";
import playlist from "../../movies.json";
import ListCard from "../listCard/ListCard";
import Playlists from "../../lists/playlist/Playlists";
import { Navigate } from "react-router-dom";
export default function WatchList() {
  const [isWatchListVisible, setIsWatchListVisible] = useState(false);
  const toggleWatchList = () => {
    setIsWatchListVisible(!isWatchListVisible);
  };
  return (
    <>
      <FaBars onClick={toggleWatchList} color="white" className={styles.bars} />

      {isWatchListVisible && (
        <div className={styles.container}>
          <h1 className={styles.watchListHeader}>WatchLists</h1>
          <Search
            fontsize={"5px"}
            text={"Search for a Playlist"}
            width={"80%"}
            height={"40px"}
          />

          <div className={styles.listsContainer}>
            <Playlists playlists={playlist.playlists} onCardClick={Navigate} />
          </div>
        </div>
      )}
    </>
  );
}
