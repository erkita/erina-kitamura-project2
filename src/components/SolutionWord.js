import { fiveLetterWordBank } from "./wordBank/five-letter-word-bank";
import { sixLetterWordBank } from "./wordBank/six-letter-word-bank";
import { sevenLetterWordBank } from "./wordBank/seven-letter-word-bank";

export const initialEasyBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const initialMediumBoard = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

export const initialHardBoard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

const getRandomLetterIndex = function (max_exclusive) {
  return Math.floor(Math.random() * max_exclusive);
};

const getLetterString = function (index) {
  return String.fromCharCode(97 + index);
};

const solutionWordReducer = function (wordBank) {
  let firstLetterIndex = getRandomLetterIndex(26);
  let firstLetter = getLetterString(firstLetterIndex);
  let wordIndex = getRandomLetterIndex(wordBank[firstLetter].length);
  return wordBank[firstLetter][wordIndex];
};

export const getSolutionWord = (level) => {
  if (level === "easy") {
    return solutionWordReducer(fiveLetterWordBank).toUpperCase();
  } else if (level === "medium") {
    return solutionWordReducer(sixLetterWordBank).toUpperCase();
  } else if (level === "hard") {
    return solutionWordReducer(sevenLetterWordBank).toUpperCase();
  }
};
