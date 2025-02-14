import React from "react";
import "./background.scss";

const colors = [
  "purple",
  "medium-blue",
  "light-blue",
  "red",
  "orange",
  "yellow",
  "cyan",
  "light-green",
  "lime",
  "magenta",
  "lightish-red",
  "pink",
];

function BackGround() {
  return (
    <div className="background">
      {colors.map((color, index) => (
        <div key={index} className={color}></div>
      ))}
    </div>
  );
}

export default BackGround;
