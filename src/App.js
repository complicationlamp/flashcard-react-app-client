import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Home } from './components/home';
import { SignupPage } from './components/signup-page';
import { FlashCard } from './components/flashCard';
import { MakeFlashcard } from './components/makeFlashcard';
import { refreshAuthToken } from './actions/auth';
// below are exported as default riquiering no {}, golbal state
import Nav from './components/nav';
import Login from './components/login';
import Profile from './components/profile';
import FlashQuiz from './components/flashQuiz';
import DeleteProfile from './components/deleteProfile'


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
            <Route path="/signup" component={SignupPage} />
            <Route path="/profile" component={Profile} />
            <Route path="/flashQuiz" component={FlashQuiz} />
            <Route path="/makeFlashcard" component={MakeFlashcard} />
            <Route path="/deleteProfile" component={DeleteProfile} />
            <Route path="/flashCard" component={FlashCard} />
          </div>  
      </Router>
    );
  }
}

export default App;