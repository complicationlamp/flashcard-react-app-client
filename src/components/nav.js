import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Test } from './test';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="Nav">
				<div className="Nav-container">
					<ul className="Nav__item-wrapper">
                		<li className="Nav__item">
                 			<Link className="Nav__link" to="/path1">Link 1</Link>
                		</li>
                		<li className="Nav__item">
                  			<Link className="Nav__link" to="/path2">Link 2</Link>
                		</li>
                		<li className="Nav__item">
							<Link className="Nav-link" to="/components/test">Test</Link>
                		</li>
              		</ul>
					<hr />
					  {/* this shold point to the page to render */}
					  {/* FIX: just poping up below the nav bar */}
					  <Route path="/components/test" component={Test} />
				</div>
			</nav>
		)
	}
}