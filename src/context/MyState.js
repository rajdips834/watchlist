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
      console.error("Error fetching movie data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Load user and playlists from localStorage
    const storedUser = localStorage.getItem("user");
    const storedPlaylists = localStorage.getItem("playlists");

    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
      setPlaylists([
        playlists.map((playlist) => playlist.email === storedUser),
      ]);
    }

    if (storedPlaylists) {
      try {
        const parsedPlaylists = JSON.parse(storedPlaylists);
        setPlaylists(parsedPlaylists);
        console.log("Loaded playlists from localStorage:", parsedPlaylists);
      } catch (error) {
        console.error("Error parsing playlists from localStorage:", error);
        setPlaylists([]);
      }
    }
  }, []);

  useEffect(() => {
    getMovieData();
  }, [searchKey]);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  function updatePlaylist() {
    localStorage.setItem("playlists", JSON.stringify(playlists));
    console.log(
      "Updated playlists in localStorage:",
      localStorage.getItem("playlists")
    );
  }

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
        updatePlaylist,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
