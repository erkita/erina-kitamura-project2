import React from "react";
import logo from "../../images/wordle_logo.png";

export default function Home() {
  return (
    <>
      <div className="page-content-containers">
        <div>
          <img src={logo} alt="Wordle logo" className="wordle-logo"></img>
        </div>
        <a href="/how-to-play">
          <div className="page-box-home">How To Play</div>
        </a>
        <a href="/easy">
          <div className="page-box-home">Play Easy</div>
        </a>
        <a href="/medium">
          <div className="page-box-home">Play Medium</div>
        </a>
        <a href="/hard">
          <div className="page-box-home">Play Hard</div>
        </a>
      </div>
    </>
  );
}
