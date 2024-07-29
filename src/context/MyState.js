import React, { useState, useEffect } from "react";
import axios from "axios";
import MyContext from "./MyContext"; // Adjust the import path

function MyState(props) {
  const [searchKey, setSearchKey] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState(() => {
    const savedPlaylists = localStorage.getItem("playlists");
    return savedPlaylists
      ? JSON.parse(savedPlaylists)
      : [
          {
            Title: "Eddie Van Halen",
            id: 1,
            Movies: [
              {
                Title: "Star Wars: Episode IV - A New Hope",
                Year: "1977",
                imdbID: "tt0076759",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
              },
              {
                Title: "Star Wars: Episode V - The Empire Strikes Back",
                Year: "1980",
                imdbID: "tt0080684",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
              },
              {
                Title: "Star Wars: Episode VI - Return of the Jedi",
                Year: "1983",
                imdbID: "tt0086190",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
              },
              {
                Title: "Star Wars: Episode VII - The Force Awakens",
                Year: "2015",
                imdbID: "tt2488496",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
              },
              {
                Title: "Star Wars: Episode VI - Return of the Jedi",
                Year: "1983",
                imdbID: "tt0086190",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
              },
              {
                Title: "Star Wars: Episode VII - The Force Awakens",
                Year: "2015",
                imdbID: "tt2488496",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
              },
              {
                Title: "Star Wars: Episode IV - A New Hope",
                Year: "1977",
                imdbID: "tt0076759",
                Type: "movie",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
              },
            ],
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [createPlaylistModalVisible, setCreatePlaylistModalVisible] =
    useState(false);
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
        playlists,
        setPlaylists,
        createPlaylistModalVisible,
        setCreatePlaylistModalVisible,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
