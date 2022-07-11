import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header/>
        <AppBody>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={""}>{/* Chat */}</Route>
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;