import React from "react";

export default function details({ movie }) {
  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
    </div>
  );
}
