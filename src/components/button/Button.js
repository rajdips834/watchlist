import React from "react";

export default function Button({
  backgroundColor = "red",
  width = "30%",
  height = "40px",
  borderRadius = "10px",
  display = "flex",
  alignItems = "center",
  justifyContent = "center",
  border = "none",
  color = "white",
  cursor = "pointer",
  Icon,
  text = "Button",
  iconStyle = {},
  textStyle = {},
  buttonStyle = {},
}) {
  return (
    <button
      style={{
        backgroundColor,
        width,
        height,
        borderRadius,
        display,
        alignItems,
        justifyContent,
        border,
        color,
        cursor,
        ...buttonStyle,
      }}
    >
      {Icon && <Icon style={{ marginRight: "8px", ...iconStyle }} />}
      <span style={textStyle}>{text}</span>
    </button>
  );
}
