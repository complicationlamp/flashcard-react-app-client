import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/nav';
import { Home } from './components/home';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { Signup } from './components/signup';
import { Profile } from './components/profile';
import { FlashQuiz } from './components/flashQuiz';
import { FlashCard } from './components/flashCard';
import {Feedback} from './components/feedback'
import {Filter} from './components/flashQuizFilter'
import {MakeFlashcard} from './components/makeFlashcard'
import {DeleteFeedback} from './components/deleteProfile'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {/* //===================== buildnote====================================
          // TODO: ADD ROUTS
          // =====================================================================// */}
          <Route path="/home" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<Route path="/signup" component={Signup} />
					<Route path="/profile" component={Profile} />
					<Route path="/flashQuiz" component={FlashQuiz} />
					<Route path="/feedback" component={Feedback} />
					<Route path="/flashQuizFilter" component={Filter} />
					<Route path="/makeFlashcard" component={MakeFlashcard} />
					<Route path="/deleteProfile" component={DeleteFeedback} />
          </div>  
      </Router>
    );
  }
}

export default App;
