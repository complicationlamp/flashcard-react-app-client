import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Home } from './home';
import { Login } from './login';
import { Logout } from './logout';
import { Signup } from './signup';
import { Profile } from './profile';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="Nav">
				<div className="Nav-container">
					<ul className="Nav__item-wrapper">
						<li className="Nav-item">
							<Link className="Nav-link" to="/components/home">Home</Link>
                		</li>
						<li className="Nav-item">
							<Link className="Nav-link" to="/components/login">Login</Link>
                		</li>
						<li className="Nav-item">
							<Link className="Nav-link" to="/components/signup">Signup</Link>
                		</li>
                		<li className="Nav-item">
							<Link className="Nav-link" to="/components/logout">Logout</Link>
                		</li>
						<li className="Nav-item">
							<Link className="Nav-link" to="/components/profile">Profile</Link>
                		</li>
              		</ul>
					<hr />
					  {/* this shold point to the page to render */}
					  {/* FIX: just poping up below the nav bar */}
					  <Route path="/components/home" component={Home} />
					  <Route path="/components/login" component={Login} />
					  <Route path="/components/logout" component={Logout} />
					  <Route path="/components/signup" component={Signup} />
					  <Route path="/components/profile" component={Profile} />
				</div>
			</nav>
		)
	}
}