import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
export default function ListCard({ listName, callback, isModal, id }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const navigate = useNavigate();
  const onClick = () => {
    console.log("clicked");
    navigate(`/playlist/id=${id}`);
  };
  const listCardStyles = {
    backgroundColor: "#757575",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.2s,scale 0.2s",
    width: "300px",
    margin: "10px",
    padding: "20px",
    transform: isHovered ? " scale(0.8)" : "translateY(0) scale(1)",
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={isModal == true ? callback : onClick}
    >
      <Button
        text={listName}
        buttonStyle={{ ...listCardStyles, border: "none", boxShadow: "none" }}
      />
    </div>
  );
}
