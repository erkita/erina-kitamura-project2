import React from "react";
import "../../App.css";
import Board from "../Board";
import GameContextWrapper from "../GameContextWrapper";

export default function Easy() {
  const level = "easy";

  return (
    <>
      <GameContextWrapper level={level}>
        <Board />
      </GameContextWrapper>
    </>
  );
}
