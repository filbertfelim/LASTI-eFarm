import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Lahan from './components/Lahan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/lahan" element={<Lahan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
