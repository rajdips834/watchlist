import React from "react";
import styles from "./Search.module.css";
import myContext from "../../context/MyContext";
import { useContext } from "react";
export default function Search({ width, height, api }) {
  const context = useContext(myContext);

  const { searchKey, setSearchKey, searchMovie } = context;
  const searchHandler = (e) => {
    searchMovie(e.target.value);
    console.log(searchKey);
  };
  return (
    <div className={styles.container}>
      <input
        style={{
          borderRadius: "5px",
          border: "1px solid #ccc",
          textAlign: "center",
          width: width ? width : "100%",
          height: height ? height : "30px",
        }}
        type="text"
        placeholder="Search for a movie"
        onChange={searchHandler}
      />
    </div>
  );
}
