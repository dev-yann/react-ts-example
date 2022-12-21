import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
              <nav>
                  <Link to="/">Accueil</Link>
                  <Link to="/tic-tac-toe">Tic Tac Toe</Link>
                  <Link to="/square">Square</Link>
              </nav>
          </div>
          <Outlet/>
      </header>
    </div>
  );
}

export default App;
