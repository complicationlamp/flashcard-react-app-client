import React from 'react';
import {Link} from 'react-router-dom';

import './nav.css';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="Nav">
				<div className="Nav-container">
				{/* CHANGED: the links below were first in an unordered list, while I gained some space, looked like 
				junk for this portion with bullet points, style at a later date*/}
					<Link className="Nav-link" to="/login">Login</Link>
					<Link className="Nav-link" to="/signup">Signup</Link>
					<Link className="Nav-link" to="/logout">Logout</Link>
					<Link className="Nav-link" to="/home">Home</Link>
					<Link className="Nav-link" to="/profile">Profile</Link>
					<hr />
				</div>
			</nav>
		)
	}
}