import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Home } from './home';
import { Login } from './login';
import { Logout } from './logout';
import { Signup } from './signup';
import { Profile } from './profile';
import { FlashQuiz } from './flashQuiz';
import { FlashCard } from './flashCard';
import {Feedback} from './feedback'
import logo from '../logo.svg';
import './nav.css';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="Nav">
				<div className="Nav-container">
				{/* CHANGED: the links below were first in an unordered list, while I gained some space, looked like 
				junk for this portion with bullet points, style at a later date*/}
					<Link className="Nav-link" to="/components/login">Login</Link>
					<Link className="Nav-link" to="/components/signup">Signup</Link>
					<Link className="Nav-link" to="/components/logout">Logout</Link>
					<Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
					<Link className="Nav-link" to="/components/home">Home</Link>
					<Link className="Nav-link" to="/components/profile">Profile</Link>
					<hr />
					{/* ============================BUILD NOTES================================================= */}
					{/* MAYBE: this shold point to the page to render */}
					{/* FIX: just poping up below the nav bar */}
					{/* ============================BUILD NOTES================================================= */}
					<Route path="/components/home" component={Home} />
					<Route path="/components/login" component={Login} />
					<Route path="/components/logout" component={Logout} />
					<Route path="/components/signup" component={Signup} />
					<Route path="/components/profile" component={Profile} />
					<Route path="/components/flashQuiz" component={FlashQuiz} />
					<Route path="/components/feedback" component={Feedback} />
				</div>
			</nav>
		)
	}
}