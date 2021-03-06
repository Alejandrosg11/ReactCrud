import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes} from './Routes';
import {NavBar} from './components/nav/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
