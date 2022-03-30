import { fiveLetterWordBank } from "./wordBank/five-letter-word-bank";
import { sixLetterWordBank } from "./wordBank/six-letter-word-bank";
import { sevenLetterWordBank } from "./wordBank/seven-letter-word-bank";
import React from "react";

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

const getRandomLetterIndex = function (max) {
  return Math.floor(Math.random() * max);
};

const getLetterString = function (index) {
  return String.fromCharCode(97 + index);
};

const getSolutionWord = function (level) {
  if (level === "easy") {
    solutionWordReducer(fiveLetterWordBank);
  } else if (level === "medium") {
    solutionWordReducer(sixLetterWordBank);
  } else if (level === "hard") {
    solutionWordReducer(sevenLetterWordBank);
  }
};

export default function solutionWordReducer(wordBank) {
  let firstLetterIndex = getRandomLetterIndex(26);
  let firstLetter = getLetterString(firstLetterIndex);
  let wordIndex = getRandomLetterIndex(
    wordBank[getLetterString(firstLetterIndex)].length
  );
  return wordBank[firstLetter][wordIndex];
}
