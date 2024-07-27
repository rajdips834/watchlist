import React, { useState } from "react";
import styles from "./WatchList.module.css";
import Search from "../search/Search";
import { FaBars } from "react-icons/fa";
import myContext from "../../context/MyContext";
import Playlists from "../../lists/playlist/Playlists";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
export default function WatchList() {
  const { playlists } = useContext(myContext);
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
            <Playlists playlists={playlists} onCardClick={Navigate} />
          </div>
        </div>
      )}
    </>
  );
}
