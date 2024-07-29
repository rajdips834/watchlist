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
    const storedPlaylists = JSON.parse(localStorage.getItem("playlists"));

    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }

    if (storedPlaylists) {
      setPlaylists(storedPlaylists);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  useEffect(() => {
    getMovieData();
  }, [searchKey]);

  const handleLogin = (userEmail) => {
    setUser(userEmail);
    setIsLoggedIn(true);
    localStorage.setItem("user", userEmail);
  };

  const handleLogout = () => {
    setUser("");
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("playlists");
  };

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
        handleLogin,
        handleLogout,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
