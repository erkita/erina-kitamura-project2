import React from "react";
import Key from "./Key";

export default function Keyboard() {
  const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <>
      <div className="keyboard">
        <div className="top-row-keys">
          {topRow.map((letter, i) => {
            return <Key key={i} keyLetter={letter} />;
          })}
        </div>
        <div className="middle-row-keys">
          {midRow.map((letter, i) => {
            return <Key key={i} keyLetter={letter} />;
          })}
        </div>
        <div className="bottom-row-keys">
          <Key keyLetter={"ENTER"} largeKey />
          {bottomRow.map((letter, i) => {
            return <Key key={i} keyLetter={letter} />;
          })}
          <Key keyLetter={"\u232b"} largeKey />
        </div>
      </div>
    </>
  );
}
