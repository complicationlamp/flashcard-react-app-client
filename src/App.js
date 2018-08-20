import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './components/nav';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <body>
          {/* //===================== buildnote====================================
          // -need some explination of the app in here, what it dose, maybe a graphic
          //    -need to make this (instructions) go away when in the quiz
          // =====================================================================// */}
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
