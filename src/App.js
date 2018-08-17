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
          <body>
            <ul>
              <li>stuff</li>
            </ul>
          </body>

//===================== buildnote====================================
// -maybe some redirect button to profile?
// -need some explination of the app in here, what it dose, maybe a graphic
// =====================================================================//




        </div>
      </Router>
    );
  }
}

export default App;
