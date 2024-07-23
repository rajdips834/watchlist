import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const [searchkey, setSearchkey] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=857f0a1&s=star"
      );
      console.log(res.data.Search);
      setMovies(res.data.Search);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        movies,
        setMovies,
        mode,
        setMode,
        searchkey,
        setSearchkey,
        loading,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
