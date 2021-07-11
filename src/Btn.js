import React from "react";
import "./styles.css";

const Button = (props) => {
  return (
    <button className={`${props.type} ${props.size}`}>{props.text}</button>
  );
};
export default Button;
