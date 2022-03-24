import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/';
import HowToPlay from './components/pages/how-to-play';
import Easy from './components/pages/easy';
import Medium from './components/pages/medium';
import Hard from './components/pages/hard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/how-to-play' component={HowToPlay} />
        <Route path='/easy' component={Easy} />
        <Route path='/medium' component={Medium} />
        <Route path='/hard' component={Hard} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
