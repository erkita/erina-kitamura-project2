import React from "react";

export default function DisplayLetter(props) {
  return (
    <div className="letter" id={props.id}>
      {props.letter}
    </div>
  );
}
