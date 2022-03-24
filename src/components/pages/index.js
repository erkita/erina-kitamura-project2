import React from 'react';

export default function Home() {
  return (
    <>
      <div class="page-content-containers">
        <a href="/how-to-play">
            <div class="page-box-home">How To Play</div>
        </a>
        <a href="/easy">
            <div class="page-box-home">Play Easy</div>
        </a>
        <a href="/medium">
            <div class="page-box-home">Play Medium</div>
        </a>
        <a href="/hard">
            <div class="page-box-home">Play Hard</div>
        </a>  
      </div>
    </>
  );
}