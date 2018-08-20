import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Logout extends React.Component {
	render() {
		return (
			<Link className="Nav-link" to="/components/home"><button type='submit'>Logout</button></Link>
		)
	}
}