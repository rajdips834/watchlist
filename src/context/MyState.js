import React, { useState, useEffect } from "react";
import axios from "axios";
import MyContext from "./MyContext"; // Adjust the import path

function MyState(props) {
  const [searchKey, setSearchKey] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const getMovieData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=fast"
      );
      setMovies(res.data.Search);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const searchMovie = async (searchKey) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=${searchKey}`
      );
      console.log(res.data.Search);
      setResults(res.data.Search);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        searchKey,
        setSearchKey,
        movies,
        setMovies,
        loading,
        searchMovie,
        results,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
