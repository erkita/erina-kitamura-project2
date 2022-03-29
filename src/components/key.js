import React, { useContext } from "react";
import { BoardContext } from "./board";

export default function Key({ keyLetter, largeKey }) {
  const { clickEnter, clickBackspace, clickLetter } = useContext(BoardContext);

  const handleKeyClick = () => {
    if (keyLetter === "ENTER") {
      clickEnter();
    } else if (keyLetter === "\u232b") {
      clickBackspace();
    } else {
      clickLetter(keyLetter);
    }
  };

  return (
    <div className={largeKey ? "key large" : "key"} onClick={handleKeyClick}>
      {keyLetter}
    </div>
  );
}
