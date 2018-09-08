import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Nav from './components/nav';
import { Home } from './components/home';
import Login from './components/login';
import { Logout } from './components/logout';
import { SignupPage } from './components/signup-page';
import { Profile } from './components/profile';
import { FlashQuiz } from './components/flashQuiz';
import { FlashCard } from './components/flashCard';
import { Feedback } from './components/feedback'
import Filter  from './components/flashQuizFilter'
import { MakeFlashcard } from './components/makeFlashcard'
import DeleteProfile from './components/deleteProfile'
import {refreshAuthToken} from './actions/auth';
import './App.css';


class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
}

componentWillUnmount() {
    this.stopPeriodicRefresh();
}

startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
}

stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }

    clearInterval(this.refreshInterval);
}
  render() {
    return (
      <Router>
        <div className="App">
            <Nav />
            <Route exact path="/" render={() => (
              <Redirect to="/home"/>
            )}/>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/profile" component={Profile} />
            <Route path="/flashQuiz" component={FlashQuiz} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/flashQuizFilter" component={Filter} />
            <Route path="/makeFlashcard" component={MakeFlashcard} />
            <Route path="/deleteProfile" component={DeleteProfile} />
            <Route path="/flashCard" component={FlashCard} />
          </div>  
      </Router>
    );
  }
}

export default App;
