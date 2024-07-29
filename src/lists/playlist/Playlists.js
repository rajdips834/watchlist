import React from "react";
import ListCard from "../../components/listCard/ListCard";

export default function Playlists({ playlists, onCardClick, isModal }) {
  return (
    <div>
      {playlists?.map((item, index) => (
        <ListCard
          key={index}
          listName={item.title}
          isModal={isModal}
          callback={onCardClick}
          id={item.id}
        />
      ))}
    </div>
  );
}
