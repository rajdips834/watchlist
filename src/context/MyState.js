import React, { useState, useEffect } from "react";
import axios from "axios";
import MyContext from "./MyContext"; // Adjust the import path

// Initial JSON data
const initialData = {
  users: [
    {
      email: "rajdips834@gmail.com",
      playlists: [
        {
          title: "Eddie Van Halen",
          id: 1,
          movies: [
            {
              title: "Star Wars: Episode IV - A New Hope",
              year: "1977",
              imdbID: "tt0076759",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
            },
            {
              title: "Star Wars: Episode V - The Empire Strikes Back",
              year: "1980",
              imdbID: "tt0080684",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            },
            {
              title: "Star Wars: Episode VII - The Force Awakens",
              year: "2015",
              imdbID: "tt2488496",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
            },
            {
              title: "Star Wars: Episode VI - Return of the Jedi",
              year: "1983",
              imdbID: "tt0086190",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            },
          ],
        },
        {
          title: "Marylyn Manson",
          id: 2,
          movies: [
            {
              title: "Star Wars: Episode IV - A New Hope",
              year: "1977",
              imdbID: "tt0076759",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
            },
            {
              title: "Star Wars: Episode V - The Empire Strikes Back",
              year: "1980",
              imdbID: "tt0080684",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            },
            {
              title: "Star Wars: Episode VII - The Force Awakens",
              year: "2015",
              imdbID: "tt2488496",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
            },
            {
              title: "Star Wars: Episode VI - Return of the Jedi",
              year: "1983",
              imdbID: "tt0086190",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            },
          ],
        },
      ],
    },
    {
      email: "sinharajdip19@gmail.com",
      playlists: [
        {
          title: "Classic Hits",
          id: 3,
          movies: [
            {
              title: "The Godfather",
              year: "1972",
              imdbID: "tt0068646",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmYtYTAwMC00ZjQ5LWI4NzQtYzZjZjQzZDhlYzYzXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_SX300.jpg",
            },
            {
              title: "Casablanca",
              year: "1942",
              imdbID: "tt0034583",
              type: "movie",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMGMxYTFlMzItMTY3Zi00M2E2LTk2NjQtM2ExMWM0ZjA0YjQzXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
            },
          ],
        },
      ],
    },
  ],
};

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
  localStorage.setItem("users", JSON.stringify(initialData));
  console.log(localStorage.getItem("users"));

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const getMovieData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        searchKey
          ? `https://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=${searchKey}`
          : `https://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=avengers`
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

  const handleLogin = (userEmail) => {
    const usersData = JSON.parse(localStorage.getItem("users"));
    const user = usersData.users.find((user) => user.email === userEmail);
    if (user) {
      setPlaylists(user.playlists);
    } else {
      const newUser = {
        email: userEmail,
        playlists: [],
      };
      usersData.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(usersData));
      setPlaylists([]);
    }
    setIsLoggedIn(true);
    setUser(userEmail);
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
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
