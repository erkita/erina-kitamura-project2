export const getPresentLetters = (board, attempt, solutionWord) => {
  return board[attempt - 1].filter((letter) => solutionWord.includes(letter));
};

export const getAbsentLetters = (board, attempt, solutionWord) => {
  return board[attempt - 1].filter((letter) => !solutionWord.includes(letter));
};

export const addNewLetterHints = (
  presentLetters,
  absentLetters,
  letterHints
) => {
  let newLetterHints = { ...letterHints };
  for (const letter of presentLetters) {
    newLetterHints[letter] = "correct";
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
