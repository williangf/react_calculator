import React, { Component } from 'react';
import Calculator from './components/calculator'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
