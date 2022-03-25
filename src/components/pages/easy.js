import React from 'react';
import '../../App.css';
import Board from "../board";

export default function Easy() {
  return (
    <>
      <Board rows={7} letters={5}/>
    </>
  );
}