import React, { useState, useContext, useEffect } from "react";
import movies from "../../movies.json";
import CardList from "../../lists/cardList/CardList";
import useWindowSize from "../../hooks/useWindowSize";
import myContext from "../../context/MyContext";
import styles from "./Home.module.css";
import Search from "../../components/search/Search";
import Header from "../../components/header/Header";
import WatchList from "../../components/watchList/WatchList";
import AddToPlaylist from "../../components/modal/AddToPlaylist";
import { FaBars } from "react-icons/fa";
import Loader from "../../components/loader/Loader";
export default function Home() {
  const context = useContext(myContext);
  const { searchKey, movies, results } = context;
  const { width } = useWindowSize();

  return (
    <>
      <div className={styles.container}>
        <WatchList />
        <div className={styles.subContainer}>
          <Header />
          <Search height={"50px"} width={"70%"} />
          <CardList width={"100%"} movieList={movies} />
          <AddToPlaylist />
        </div>
      </div>
    </>
  );
}
