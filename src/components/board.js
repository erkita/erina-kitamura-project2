import React, { useContext, useState } from 'react';
import Keyboard from './keyboard';

export default function Board({tries, letters}) {
    const rows = Array(tries).fill(null).map((_, i) => i);
    const columns = Array(letters).fill(null).map((_, i) => i);
  return (
      <>
        <div className="message">message</div>
        <div className="board-container">
            {rows.map((row, i) => (
                <div className="grid">
                    {
                        columns.map((col, j) => (
                            <div className="letter ">A</div>
                        ))
                    }
                </div>
            ))}
        
            {/* 
            <div className="grid">
                <div className="letter correct">A</div>
                <div className="letter present">A</div>
                <div className="letter absent">A</div>
                <div className="letter">A</div>
                <div className="letter">A</div>
            </div>
            */}
        </div>

        <Keyboard />
      </>
  )
}
