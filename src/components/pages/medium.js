import React from "react";
import "../../App.css";
import Board from "../Board";
import GameContextWrapper from "../GameContextWrapper";

export default function Medium() {
  const level = "medium";

  return (
    <>
      <GameContextWrapper level={level}>
        <Board />
      </GameContextWrapper>
    </>
  );
}
