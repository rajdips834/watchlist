import React from "react";
import movies from "../../movies.json"; // Ensure this is the correct path
import CardList from "../../components/cardList/CardList";
import useWindowSize from "../../hooks/useWindowSize";
export default function Home() {
  console.log(movies);
  return (
    <div>
      <CardList movieList={movies.movies} />
    </div>
  );
}
