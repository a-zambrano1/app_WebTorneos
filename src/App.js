import './App.css';
import Auth from './logeo';
import React from "react";
import Inicio from './inicio';
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/login' element={<Auth/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
