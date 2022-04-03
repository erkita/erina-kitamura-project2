import React, { useState } from "react";
import "../../App.css";
import { createContext } from "react";
import Board from "../board";
import { initialEasyBoard, getSolutionWord } from "../solution-word";
import * as gameState from "../game-state";

export const EasyContext = createContext();

export default function Easy() {
  const level = "easy";
  const solution = getSolutionWord(level);

  const [board, setBoard] = useState(initialEasyBoard);
  const [numAttempt, setNumAttempt] = useState(gameState.guessAttempts);
  const [letterHints, setLetterHints] = useState({});
  const [gameOver, setGameOver] = useState({ gameOver: false, userWon: false });
  const [solutionWord, setSolutionWord] = useState(solution);

  return (
    <>
      <EasyContext.Provider
        value={{
          board,
          setBoard,
          numAttempt,
          setNumAttempt,
          letterHints,
          setLetterHints,
          gameOver,
          setGameOver,
          solutionWord,
          setSolutionWord,
          level,
        }}
      >
        <Board />
      </EasyContext.Provider>
    </>
  );
}
