import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header/>
        <AppBody>
          <Routes>
            <Route exact path="/" element={<h1>Hello</h1>}>{/* Chat */}</Route>
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`

`;