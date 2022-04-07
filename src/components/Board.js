import React, { createContext, useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContextWrapper";
import Keyboard from "./Keyboard";
import Message from "./Message";
import * as gameConstant from "./GameState";
import * as letterHelper from "./helpers/LetterValidationHelper";
import * as locHelper from "./helpers/RowColumnHelper";
import "../App.css";

export const BoardContext = createContext();

export default function Board() {
  const [message, setMessage] = useState("");
  const [isEntered, setIsEntered] = useState(false);

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
    level,
  } = useContext(GameContext);

  let rows = locHelper.getRows(gameConstant.tries, level);
  let columns = locHelper.getColumns(gameConstant.wordLength, level);

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
    setIsEntered(true);
    if (numAttempt.letterIndex < gameConstant.wordLength[level]) return;
    setNumAttempt({
      attempt: numAttempt.attempt + 1,
      letterIndex: 0,
    });
    handleGameEnd();
  };

  const clickBackspace = () => {
    setIsEntered(false);
    if (numAttempt.letterIndex === 0) return;
    const boardState = [...board];
    boardState[numAttempt.attempt][numAttempt.letterIndex - 1] = "";
    setNumAttempt({ ...numAttempt, letterIndex: numAttempt.letterIndex - 1 });
    setBoard(boardState);
  };

  const clickLetter = (keyLetter) => {
    setIsEntered(false);
    if (numAttempt.letterIndex > gameConstant.wordLength[level]) return;
    const boardState = [...board];
    boardState[numAttempt.attempt][numAttempt.letterIndex] = keyLetter;
    setNumAttempt({ ...numAttempt, letterIndex: numAttempt.letterIndex + 1 });
    setBoard(boardState);
  };

  const getKeyColor = function (row, col) {
    if (numAttempt.attempt > row) {
      if (letterHelper.isCorrectLetter(row, col, solutionWord, board)) {
        return "correct";
      } else if (letterHelper.isPresentLetter(row, col, solutionWord, board)) {
        return "present";
      } else {
        return "absent";
      }
    }
    return "";
  };

  const refreshPage = function () {
    window.location.reload(false);
  };

  useEffect(() => {
    if (numAttempt.attempt > 0 && !gameOver.userWon) {
      let presentLetters = letterHelper.getPresentLetters(
        board,
        numAttempt.attempt,
        solutionWord
      );
      let absentLetters = letterHelper.getAbsentLetters(
        board,
        numAttempt.attempt,
        solutionWord
      );
      let newLetterHints = letterHelper.addNewLetterHints(
        presentLetters,
        absentLetters,
        letterHints
      );
      setLetterHints(newLetterHints);
    }
  }, [numAttempt.letterIndex]);

  return (
    <>
      <BoardContext.Provider
        value={{
          board,
          clickEnter,
          clickBackspace,
          clickLetter,
          letterHints,
          setLetterHints,
          solutionWord,
          numAttempt,
          gameOver,
          message,
          setMessage,
          isEntered,
          setIsEntered,
        }}
      >
        <Message />
        <div className="board-container">
          {rows.map((row, i) => (
            <div key={i} className="grid">
              {columns.map((col, j) => (
                <div key={j} className="letter" id={getKeyColor(row, col)}>
                  {board[row][col]}
                </div>
              ))}
            </div>
          ))}
        </div>

        <Keyboard />
      </BoardContext.Provider>
      <button className="reset-button" onClick={refreshPage}>
        Play new game
      </button>
    </>
  );
}
