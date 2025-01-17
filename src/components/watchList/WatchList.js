import React, { useState } from "react";
import styles from "./WatchList.module.css";
import Search from "../search/Search";
import { FaBars } from "react-icons/fa";
import myContext from "../../context/MyContext";
import Playlists from "../../lists/playlist/Playlists";
import { useContext } from "react";
import Button from "../button/Button";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
export default function WatchList() {
  const { playlists, user, isLoggedIn } = useContext(myContext);
  const navigate = useNavigate();
  const [isWatchListVisible, setIsWatchListVisible] = useState(false);
  const toggleWatchList = () => {
    setIsWatchListVisible(!isWatchListVisible);
  };
  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <FaBars onClick={toggleWatchList} color="white" className={styles.bars} />
      {isWatchListVisible && (
        <div className={styles.container}>
          <h1 className={styles.watchListHeader}>WatchLists</h1>
          {/* <Search
            fontsize={"5px"}
            text={"Search for a Playlist"}
            width={"80%"}
            height={"40px"}
          /> */}
          <div className={styles.listsContainer}>
            {playlists.length > 0 && (
              <Playlists playlists={playlists} isModal={false} />
            )}
          </div>
          <div
            onClick={() =>
              !isLoggedIn ? navigate("/login") : console.log("Logout")
            }
            className={styles.login}
          >
            <CiUser className={styles.userIcon} />
            {isLoggedIn ? user : "Login"}
          </div>
          {isLoggedIn && (
            <Button
              text="Logout"
              callback={logoutHandler}
              buttonStyle={{ margin: "10px" }}
            />
          )}
        </div>
      )}
    </>
  );
}
