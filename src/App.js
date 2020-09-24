import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tw from './coolstuff/typewriter/Tw.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      <Tw></Tw>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>

    
    </div>
  );
}

export default App;
