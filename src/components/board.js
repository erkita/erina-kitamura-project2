import React, { useContext, useState } from "react";
import { EasyContext } from "./pages/easy";
// import { MediumContext } from "./pages/medium";
// import { HardContext } from "./pages/hard";
import Keyboard from "./keyboard";
import "../App.css";

export default function Board({ level }) {
  const { board } = useContext(EasyContext);

  const tries = {
    easy: 7,
    medium: 6,
    hard: 5,
  };
  const wordLength = {
    easy: 5,
    medium: 6,
    hard: 7,
  };

  const getRows = function (level) {
    let numTries = tries[level];
    return Array(numTries)
      .fill(null)
      .map((_, i) => i);
  };

  const getColumns = function (level) {
    let numletters = wordLength[level];
    return Array(numletters)
      .fill(null)
      .map((_, i) => i);
  };

  let rows = getRows(level);
  let columns = getColumns(level);

  return (
    <>
      <div className="message">message</div>
      <div className="board-container">
        {rows.map((row, i) => (
          <div key={i} className="grid">
            {columns.map((col, j) => (
              <div key={j} className="letter ">
                {board[row][col]}
              </div>
            ))}
          </div>
        ))}

        {/* 
            <div className="grid">
                <div className="letter correct">A</div>
                <div className="letter present">A</div>
                <div className="letter absent">A</div>
                <div className="letter">A</div>
                <div className="letter">A</div>
            </div>
            */}
      </div>

      <Keyboard />
    </>
  );
}
