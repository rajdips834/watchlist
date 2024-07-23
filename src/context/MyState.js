import React, { useEffect, useState } from "react";
import MyContext from "./MyState";
import { toast } from "react-toastify";
import axios from "axios";
function MyState(props) {
  const [mode, setMode] = useState("light");

  const [searchkey, setSearchkey] = useState("");
  // const [filterType, setFilterType] = useState("All");
  // const [filterPrice, setFilterPrice] = useState("Any Price");
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  // const [orderList, setOrderList] = useState([]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [movies, setMovies] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
  });

  // const addMovie = async () => {
  //   if (
  //     movies.title == null ||
  //     movies.price == null ||
  //     movies.imageUrl == null ||
  //     movies.category == null ||
  //     movies.description == null
  //   ) {
  //     return toast.error("all fields are required");
  //   }

  setLoading(true);

  const getMovieData = async () => {
    setLoading(true);
    axios
      .get(" http://www.omdbapi.com/?i=tt3896198&apikey=857f0a0&s=star")
      .then((res) => {
        console.log(res.data.Search);
        setMovieList(res.data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // const edithandle = (item) => {
  //   setMovies(item);
  // };

  // const updateMovie = async () => {
  //   setLoading(true);
  //   try {
  //     await setDoc(doc(fireDB, "movies", movies.id), movies);
  //     toast.success("Movie Updated successfully");
  //     setTimeout(() => {
  //       window.location.href = "/dashboard";
  //     }, 800);
  //     getMovieData();
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // delete movie

  // const deleteMovie = async (item) => {
  //   setLoading(true);
  //   try {
  //     await deleteDoc(doc(fireDB, "movies", item.id));
  //     toast.success("Movie Deleted successfully");
  //     getMovieData();
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        movies,
        setMovies,

        searchkey,
        setSearchkey,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
