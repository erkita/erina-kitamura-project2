import React, { useContext, useEffect } from "react";
import { BoardContext } from "./board";

export default function Message() {
  const {
    solutionWord,
    gameOver,
    message,
    setMessage,
    numAttempt,
    isEntered,
    clickEnter,
  } = useContext(BoardContext);

  useEffect(() => {
    let newMessage = "";
    if (gameOver.gameOver && gameOver.userWon) {
      newMessage = "You won!";
    } else if (gameOver.gameOver && !gameOver.userWon) {
      newMessage = solutionWord;
    } else if (numAttempt.letterIndex === 0 && isEntered) {
      newMessage = "";
    } else if (isEntered && numAttempt.letterIndex < solutionWord.length) {
      newMessage =
        "Enter shorter word with " + solutionWord.length + " letters";
    } else if (numAttempt.letterIndex > solutionWord.length && !isEntered) {
      newMessage = "Enter longer word with " + solutionWord.length + " letters";
    } else {
      newMessage = "";
    }
    setMessage(newMessage);
  }, [numAttempt.letterIndex, clickEnter]);

  const setMessageBox = () => {
    if (message !== "") {
      return "message-container message";
    } else {
      return "message-container";
    }
  };
  return <div className={setMessageBox()}>{message}</div>;
}
