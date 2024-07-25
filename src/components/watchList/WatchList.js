import React from "react";
import styles from "./WatchList.module.css";
import Search from "../search/Search";
import { FaHome } from "react-icons/fa";

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
      <button
        style={{
          backgroundColor: "red",
          width: "30%",
          height: "40px", // Adjusted height for better appearance
          borderRadius: "10px", // Rounded edges
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <FaHome style={{ marginRight: "8px" }} />
        Home
      </button>
    </div>
  );
}
