import React, { useContext } from "react";
import { GameContext } from "../App";

export default function Key({ keyLetter, largeKey }) {
  //   const clickLetter = () => {
  //     const boardState = [...board];
  //   };
  return <div className={largeKey ? "key large" : "key"}>{keyLetter}</div>;
}
