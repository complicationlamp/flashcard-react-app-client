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
		let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
		return (
			<nav className="Nav">
				<div className="Nav-container">
				{/* CHANGED: the links below were first in an unordered list, while I gained some space, looked like 
				junk for this portion with bullet points, style at a later date*/}
					<Link className="Nav-link" to="/login">Login</Link>
					<Link className="Nav-link" to="/signup">Signup</Link>
					{logOutButton}
					<Link className="Nav-link" to="/home">Home</Link>
					<Link className="Nav-link" to="/profile">Profile</Link>
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
