import React, { useState, useContext, useEffect } from "react";
import CardList from "../../lists/cardList/CardList";
import myContext from "../../context/MyContext";
import styles from "./Home.module.css";
import Search from "../../components/search/Search";
import Header from "../../components/header/Header";
import WatchList from "../../components/watchList/WatchList";
import AddToPlaylist from "../../components/modal/AddToPlaylist";
import Wrapper from "../../components/modal/Wrapper";
export default function Home() {
  const context = useContext(myContext);
  const { movies } = context;

  return (
    <>
      <div className={styles.container}>
        <WatchList />
        <div className={styles.subContainer}>
          <Header />
          <Search height={"70px"} width={"70%"} />
          <CardList width={"100%"} movieList={movies} />
          <Wrapper />
        </div>
      </div>
    </>
  );
}
