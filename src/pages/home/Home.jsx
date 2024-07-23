import React, { useEffect } from "react";
import { useContext } from "react";
import movies from "../../movies.json"; // Ensure this is the correct path
import CardList from "../../components/cardList/CardList";
import useWindowSize from "../../hooks/useWindowSize";
import WatchList from "../../components/watchList/WatchList";
import myContext from "../../context/MyContext";
import styles from "./Home.module.css";
import Search from "../../components/search/Search";
export default function Home() {
  const context = useContext(myContext);
  const { searchKey, movies, results } = context;
  console.log(results);
  useEffect(() => {}, [searchKey, results]);
  return (
    <div styles={styles.container}>
      <Search width={"70%"} />
      <CardList movieList={results ? results : movies} />
    </div>
  );
}
