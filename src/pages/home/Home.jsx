import React from "react";
import movies from "../../movies.json"; // Ensure this is the correct path
import CardList from "../../components/cardList/CardList";
import useWindowSize from "../../hooks/useWindowSize";
import WatchList from "../../components/watchList/WatchList";
import styles from "./Home.module.css";
import Search from "../../components/search/Search";
export default function Home() {
  return (
    <div styles={styles.container}>
      <Search width={"70%"} />
      <CardList movieList={movies.movies} />
    </div>
  );
}
