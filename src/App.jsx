import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contacto from './Components/Contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App