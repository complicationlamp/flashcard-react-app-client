import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './nav.css';

export class Nav extends React.Component {
	logOut() {
        this.props.dispatch(clearAuth());
		clearAuthToken();
			window.location.replace('/home')
			alert('successful logout!');
    }
	render() {
		// When a user is loggedin they will have access to the nav link to the profile 
		let logOutButton, profileAccess, signUpAccess, logInAccess;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
			);
			profileAccess = (
				<Link className="Nav-link" to="/profile">Profile</Link>
			)
        } else if (!this.props.loggedIn) {
			signUpAccess = (
				<Link className="Nav-link" to="/signup">Signup</Link>
			);
			logInAccess = (
				<Link className="Nav-link" to="/login">Login</Link>
			)
		}
		return (
			<nav className="Nav">
				<div className="Nav-container">
				{/* CHANGED: the links below were first in an unordered list, while I gained some space, looked like 
				junk for this portion with bullet points, style at a later date*/}
					<Link className="Nav-link" to="/home">Home</Link>
					{signUpAccess}
					{logOutButton}
					{profileAccess}
					{logInAccess}
					<hr />
				</div>
			</nav>
		)
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);
