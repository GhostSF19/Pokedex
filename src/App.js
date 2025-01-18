import React from 'react';
import './App.css';
import Homepage from './components/views/Homepage';
import Pokepage from './components/views/Pokepage';
import Error404Page from './components/views/404errorpage'; // Import the 404 error page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokepage" element={<Pokepage />} />
          <Route path="*" element={<Error404Page />} /> {/* Use 404errorpage.js here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

