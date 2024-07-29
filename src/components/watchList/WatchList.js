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
            <Playlists playlists={playlists} isModal={false} />
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
          <button
            onClick={() => {
              logoutHandler();
            }}
            style={{
              backgroundColor: "red", // Blue background
              color: "#FFF", // White text
              border: "none", // No border
              margin: "10px 0", // Some margin
              borderRadius: "4px", // Rounded corners
              padding: "20px", // Vertical and horizontal padding
              fontSize: "16px", // Font size
              cursor: "pointer", // Pointer cursor on hover
              transition: "background-color 0.3s", // Smooth change on hover
              outline: "none", // Remove default outline
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            } // Darker blue on hover
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007BFF")
            } // Original blue on mouse out
          >
            Logout
          </button>{" "}
        </div>
      )}
    </>
  );
}
