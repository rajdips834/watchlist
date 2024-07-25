import React from "react";
import styles from "./Search.module.css";
import myContext from "../../context/MyContext";
import { useContext } from "react";
export default function Search({ text, width, height, api }) {
  const context = useContext(myContext);

  const { fontsize, searchKey, setSearchKey, searchMovie } = context;
  const searchHandler = (e) => {
    searchMovie(e.target.value);
    console.log(searchKey);
  };
  return (
    <input
      style={{
        borderRadius: "10px",
        border: "1px solid red",
        backgroundColor: "#322f2f",
        textAlign: "center",
        width: width ? width : "100%",
        height: height ? height : "50px",
        fontSize: fontsize ? fontsize : "20px",
      }}
      type="text"
      placeholder={text ? text : "Search for movies"}
      onChange={searchHandler}
    />
  );
}
