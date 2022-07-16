import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
            <Header/>
            <AppBody>
              <Sidebar />
              <Routes>
                <Route exact path="/" element={<Chat />}>
                </Route>
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;