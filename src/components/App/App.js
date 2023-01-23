import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "../Home/Home";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Navigate to="/"/>} />
      </Routes>
  );
}

export default App;
