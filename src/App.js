import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './components/nav';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Nav />
          <header className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h1 className="App-title">Learn more</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
