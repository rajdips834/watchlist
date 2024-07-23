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
      <div
        className={styles.centre}
        style={{
          borderRadius: "5px",
          borderColor: "red",
          paddingLeft: "10px",
        }}
      >
        <h1 className={styles.heading}>Welcome to Watchlist</h1>
        <h3 className={styles.subHeading}>
          Search for your favorite movies,add them to watchlists and share them
          with friends
        </h3>
        <h3 className={styles.subHeading}>
          Click the bookmark button to add a movie to a watchlist
        </h3>
        j
      </div>
      <Search width={"70%"} />
      <CardList movieList={results.length > 0 ? results : movies} />
    </div>
  );
}
