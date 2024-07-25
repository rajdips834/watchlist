import React, { useEffect } from "react";
import { useContext } from "react";
import movies from "../../movies.json"; // Ensure this is the correct path
import CardList from "../../lists/cardList/CardList";
import useWindowSize from "../../hooks/useWindowSize";
import myContext from "../../context/MyContext";
import styles from "./Home.module.css";
import Search from "../../components/search/Search";
import Header from "../../components/header/Header";
import WatchList from "../../components/watchList/WatchList";
export default function Home() {
  const context = useContext(myContext);
  const { searchKey, movies, results } = context;
  useEffect(() => {}, [searchKey, results]);

  return (
    <div className={styles.container}>
      <div className={styles.watchListContainer}>
        <WatchList />
      </div>
      <div className={styles.subContainer}>
        <Header />
        <Search width={"60%"} />
        <CardList width={"100%"} movieList={searchKey ? results : movies} />
      </div>
    </div>
  );
}
