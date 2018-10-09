import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Budget from "./components/Budget.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Budget />
      </div>
    );
  }
}

export default App;
