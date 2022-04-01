import React, { useContext } from "react";
import { EasyContext } from "./pages/easy";

export default function GameOver() {
  const { solutionWord, gameOver } = useContext(EasyContext);

  const getMessage = () => {
    if (gameOver.gameOver && gameOver.userWon) {
      return "You won!";
    } else if (gameOver.gameOver && !gameOver.userWon) {
      return solutionWord;
    }
  };

  const setMessageBox = () => {
    if (gameOver.gameOver) {
      return "message-container message";
    } else {
      return "message-container";
    }
  };
  return <div className={setMessageBox()}>{getMessage()}</div>;
}
