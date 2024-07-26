import React, { useState, useEffect } from "react";
import axios from "axios";
import MyContext from "./MyContext"; // Adjust the import path

function MyState(props) {
  const [searchKey, setSearchKey] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const getMovieData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        searchKey
          ? `http://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=${searchKey}`
          : `http://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=avengers`
      );
      setMovies(res.data.Search);
      console.log(res.data.Search);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovieData();
  }, [searchKey]);

  return (
    <MyContext.Provider
      value={{
        searchKey,
        setSearchKey,
        movies,
        setMovies,
        loading,
        playlists,
        setPlaylists,
        loading,
        setLoading,
        isModalVisible,
        setIsModalVisible,
        selectedItem,
        setSelectedItem,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
