import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
    <img
      src="/assets/Images/LinkedIn Photo.png"
      className="rounded-circle img-center"
      alt="LinkedIn headshot"
    />
    <br />
    <br />
    <br />
    <p id="titleName"><strong>RICHARD MINGIONE</strong></p>
    <p>&lt;dev&gt;</p>
  </div>
  );
}

export default Jumbotron;