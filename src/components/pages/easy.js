import React, { useState } from "react";
import "../../App.css";
import { createContext } from "react";
import Board from "../board";
import { initialEasyBoard } from "../solution-word";

export const EasyContext = createContext();

export default function Easy() {
  const [board, setBoard] = useState(initialEasyBoard);

  return (
    <>
      <EasyContext.Provider value={{ board, setBoard }}>
        <Board level={"easy"} />
      </EasyContext.Provider>
    </>
  );
}
