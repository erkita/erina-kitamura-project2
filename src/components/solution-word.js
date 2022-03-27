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

export default function solutionWordReducer() {
  let firstLetter = getRandomLetterIndex(26);
  let wordIndex = getRandomLetterIndex(
    fiveLetterWordBank[getLetterString(firstLetter)].length
  );
  // resolve fiveWordBank -> 5, 6, or 7
  return;
}
