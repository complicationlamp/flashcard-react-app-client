import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './cssComponents/nav.css'

export class Nav extends React.Component {
	logOut() {
        this.props.dispatch(clearAuth());
		clearAuthToken();
		window.location.replace('/home')
    }
	render() {
		// When a user is loggedin they will have access to the nav link to the profile 
		// When not logged in the signup and login links will be visiable
		let logOutButton, profileAccess, signUpAccess, logInAccess;
        if (this.props.loggedIn) {
            logOutButton = (
                <Link className="Nav-link" onClick={() => this.logOut()} to="/home">Log out</Link>
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
				<div className="row">
					<ul className="Nav-container ">
				{/* keeping home visiable was always important */}
						<Link className="Nav-link" to="/home">Home</Link>
						{signUpAccess}
						{logOutButton}
						{profileAccess}
						{logInAccess}
					</ul>
				</div>
				
			</nav>
		)
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);
