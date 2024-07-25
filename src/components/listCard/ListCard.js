import React from "react";
import Button from "../button/Button";

export default function ListCard({ listName, callback }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const listCardStyles = {
    backgroundColor: "#757575",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.2s",
    width: "300px",
    margin: "10px",
    padding: "20px",
    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        text={listName}
        buttonStyle={{ ...listCardStyles, border: "none", boxShadow: "none" }}
      />
    </div>
  );
}
