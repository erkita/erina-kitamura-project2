import React, { createContext, useContext, useEffect, useState } from "react";
import { EasyContext } from "./pages/easy";
// import { MediumContext } from "./pages/medium";
// import { HardContext } from "./pages/hard";
import Keyboard from "./keyboard";
import GameOver from "./GameOver";
import * as gameConstant from "./game-state";
import { getSolutionWord } from "./solution-word";
import "../App.css";

export const BoardContext = createContext();

export default function Board() {
  const {
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
  } = useContext(EasyContext);

  const getRows = function (level) {
    let numTries = gameConstant.tries[level];
    return Array(numTries)
      .fill(null)
      .map((_, i) => i);
  };

  const getColumns = function (level) {
    let numletters = gameConstant.wordLength[level];
    return Array(numletters)
      .fill(null)
      .map((_, i) => i);
  };

  let rows = getRows(level);
  let columns = getColumns(level);

  const isCorrectWord = () => {
    let guessedWord = board[numAttempt.attempt].join("");
    return guessedWord === solutionWord;
  };

  const handleGameEnd = () => {
    if (isCorrectWord()) {
      setGameOver({ gameOver: true, userWon: true });
    } else if (numAttempt.attempt === gameConstant.tries[level] - 1) {
      setGameOver({ gameOver: true, userWon: false });
    }
  };

  const clickEnter = () => {
    if (numAttempt.letterIndex < gameConstant.wordLength[level]) return;
    setNumAttempt({
      attempt: numAttempt.attempt + 1,
      letterIndex: 0,
    });
    handleGameEnd();
  };

  const clickBackspace = () => {
    if (numAttempt.letterIndex === 0) return;
    const boardState = [...board];
    boardState[numAttempt.attempt][numAttempt.letterIndex - 1] = "";
    setNumAttempt({ ...numAttempt, letterIndex: numAttempt.letterIndex - 1 });
    setBoard(boardState);
  };

  const clickLetter = (keyLetter) => {
    if (numAttempt.letterIndex > gameConstant.tries[level] - 1) return;
    const boardState = [...board];
    boardState[numAttempt.attempt][numAttempt.letterIndex] = keyLetter;
    setNumAttempt({ ...numAttempt, letterIndex: numAttempt.letterIndex + 1 });
    setBoard(boardState);
  };

  const isCorrectLetter = function (row, col) {
    return solutionWord[col] === board[row][col];
  };

  const isPresentLetter = function (row, col) {
    return (
      board[row][col] !== "" &&
      !isCorrectLetter(row, col) &&
      solutionWord.includes(board[row][col])
    );
  };

  const getPresentLetters = function () {
    return board[numAttempt.attempt - 1].filter((letter) =>
      solutionWord.includes(letter)
    );
  };

  const getAbsentLetters = function () {
    return board[numAttempt.attempt - 1].filter(
      (letter) => !solutionWord.includes(letter)
    );
  };

  const addNewLetterHints = function (presentLetters, absentLetters) {
    let newLetterHints = { ...letterHints };
    for (const letter of presentLetters) {
      newLetterHints[letter] = "correct";
    }
    for (const letter of absentLetters) {
      newLetterHints[letter] = "absent";
    }
    return newLetterHints;
  };

  const getGridColor = function (row, col) {
    if (numAttempt.attempt > row) {
      if (isCorrectLetter(row, col)) {
        return "correct";
      } else if (isPresentLetter(row, col)) {
        return "present";
      } else {
        return "absent";
      }
    }
    return "";
  };

  useEffect(() => {
    if (numAttempt.attempt > 0) {
      let presentLetters = getPresentLetters();
      let absentLetters = getAbsentLetters();
      let newLetterHints = addNewLetterHints(presentLetters, absentLetters);
      setLetterHints(newLetterHints);
    }
  }, [numAttempt.letterIndex]);

  return (
    <>
      <GameOver />
      <div className="board-container">
        {rows.map((row, i) => (
          <div key={i} className="grid">
            {columns.map((col, j) => (
              <div key={j} className="letter" id={getGridColor(row, col)}>
                {board[row][col]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <BoardContext.Provider
        value={{
          clickEnter,
          clickBackspace,
          clickLetter,
          letterHints,
          setLetterHints,
          solutionWord,
        }}
      >
        <Keyboard />
      </BoardContext.Provider>
    </>
  );
}
