import React from "react";
import {Link} from 'react-router-dom';

export class Logout extends React.Component {
	render() {
		function handleClick(e) {
			e.preventDefault();
			console.log('Logout was clicked');
		}
		return (
			<Link className="Nav-link" to="/components/home"><button type='submit' onClick={handleClick}>Logout</button></Link>
		)
	}
}