import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './forRouter/Home';
import Contact from './forRouter/Contact';
import About from './forRouter/About';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </nav>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App
