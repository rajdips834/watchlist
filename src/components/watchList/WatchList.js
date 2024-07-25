import React from "react";
import styles from "./WatchList.module.css";
import Search from "../search/Search";
import { FaHome } from "react-icons/fa";
import Button from "../button/Button";
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
    </div>
  );
}
