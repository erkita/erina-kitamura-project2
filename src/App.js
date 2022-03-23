import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import HowToPlay from './pages/how-to-play';
import Easy from './pages/easy';
import Medium from './pages/medium';
import Hard from './pages/hard';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
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
