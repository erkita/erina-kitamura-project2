import React, { createContext } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/";
import HowToPlay from "./components/pages/how-to-play";
import Easy from "./components/pages/easy";
import Medium from "./components/pages/medium";
import Hard from "./components/pages/hard";

export const GameContext = createContext();

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
