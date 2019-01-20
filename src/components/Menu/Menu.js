import React from "react";
import "./Menu.css";

export default function Menu(props) {
  // console.log(props)
  let style = {
    background: props.color
  };
  return (
      <h1 style={style} className="menu">Flachecard</h1>
  );
}
