import React from "react";

const buttonStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  textDecoration: "none",
  color: "black",
  borderRadius: "10px",
  border: "1px solid black"
};

const Button = () => (
  <a style={buttonStyle} href="#" onClick={() => alert("you clicked me")}>
    {"i'm a button"}
  </a>
);

export default Button;
