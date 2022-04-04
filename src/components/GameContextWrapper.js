import React, { useState } from "react";
import "../App.css";
import { createContext } from "react";
import Board from "./Board";
import * as solutionWordConst from "./SolutionWord";
import * as gameState from "./GameState";

export const GameContext = createContext();

export default function GameContextWrapper(props) {
  console.log("game context " + props.level);
  const level = props.level;
  const solution = solutionWordConst.getSolutionWord(level);

  const getBoard = function () {
    if (props.level === "easy") {
      return solutionWordConst.initialEasyBoard;
    } else if (props.level === "medium") {
      return solutionWordConst.initialMediumBoard;
    } else if (props.level === "hard") {
      return solutionWordConst.initialHardBoard;
    }
  };

  const [board, setBoard] = useState(() => getBoard());
  const [numAttempt, setNumAttempt] = useState(gameState.guessAttempts);
  const [letterHints, setLetterHints] = useState({});
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    userWon: false,
  });
  const [solutionWord, setSolutionWord] = useState(solution);

  return (
    <>
      <GameContext.Provider
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
      </GameContext.Provider>
    </>
  );
}
