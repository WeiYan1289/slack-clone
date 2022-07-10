import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>}>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
