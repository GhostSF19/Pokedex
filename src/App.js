import React from 'react';
import './App.css';
import Homepage from './components/views/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokepage from './components/views/Pokepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokepage" element={<Pokepage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
