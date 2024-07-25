import React from "react";
import ListCard from "../../components/listCard/ListCard";

export default function Playlists({ playlists, onCardClick }) {
  return (
    <div>
      {playlists.map((item, index) => (
        <ListCard key={index} listName={item.Title} callback={onCardClick} />
      ))}
    </div>
  );
}
