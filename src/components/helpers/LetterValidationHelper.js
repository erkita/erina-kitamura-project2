export const getPresentLetters = (
  board,
  attempt,
  solutionWord,
  correctLetters
) => {
  let guessedWordArr = board[attempt - 1].join("").split("");
  let presentAbsentLetters = guessedWordArr.filter(
    (letter) => !correctLetters.includes(letter)
  );
  return presentAbsentLetters.filter((letter) => solutionWord.includes(letter));
};

export const getCorrectLetters = (board, attempt, solutionWord) => {
  let guessedWord = board[attempt - 1].join("");
  let correctLetters = [];
  for (let i = 0; i < guessedWord.length; i++) {
    if (guessedWord.charAt(i) === solutionWord.charAt(i)) {
      correctLetters.push(guessedWord.charAt(i));
    }
  }
  return correctLetters;
};

export const getAbsentLetters = (board, attempt, solutionWord) => {
  return board[attempt - 1].filter((letter) => !solutionWord.includes(letter));
};

export const addNewLetterHints = (
  correctLetters,
  presentLetters,
  absentLetters,
  letterHints
) => {
  let newLetterHints = { ...letterHints };
  for (const letter of correctLetters) {
    newLetterHints[letter] = "correct";
  }
  for (const letter of presentLetters) {
    newLetterHints[letter] = "present";
  }
  for (const letter of absentLetters) {
    newLetterHints[letter] = "absent";
  }
  return newLetterHints;
};

export const isCorrectLetter = (row, col, solutionWord, board) => {
  return solutionWord[col] === board[row][col];
};

export const isPresentLetter = (row, col, solutionWord, board) => {
  return (
    board[row][col] !== "" &&
    !isCorrectLetter(row, col, solutionWord, board) &&
    solutionWord.includes(board[row][col])
  );
};
