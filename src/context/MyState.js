import React, { useState, useEffect } from "react";
import axios from "axios";
import MyContext from "./MyContext"; // Adjust the import path

function MyState(props) {
  const [searchKey, setSearchKey] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [createPlaylistModalVisible, setCreatePlaylistModalVisible] =
    useState(false);
  const [playlists, setPlaylists] = useState([]);

  const getMovieData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        searchKey
          ? `https://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=${searchKey}`
          : `https://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=avengers`
      );
      setMovies(res.data.Search);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedPlaylistsString = localStorage.getItem("playlists");

    let storedPlaylists = [];

    try {
      storedPlaylists = storedPlaylistsString
        ? JSON.parse(storedPlaylistsString)
        : [];
    } catch (error) {
      console.error("Error parsing playlists from localStorage", error);
      storedPlaylists = [];
    }

    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }

    setPlaylists(storedPlaylists);
  }, []);
  function updatePlaylists(playlists) {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }
  useEffect(() => {
    getMovieData();
  }, [searchKey]);
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);
  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  return (
    <MyContext.Provider
      value={{
        searchKey,
        setSearchKey,
        movies,
        setMovies,
        loading,
        setLoading,
        playlists,
        setPlaylists,
        isModalVisible,
        setIsModalVisible,
        selectedItem,
        setSelectedItem,
        createPlaylistModalVisible,
        setCreatePlaylistModalVisible,
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        updatePlaylists,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
