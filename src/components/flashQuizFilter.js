import React from 'react';
import {Link} from 'react-router-dom';

export class Filter extends React.Component {
	render() {
		return (
			<section>
			{/* // ==============================BUILD NOTES================================ */}
			 {/* TODO: when out of small screen view make this snap to a sidebar */}
			 {/* ==============================BUILD NOTES================================ */}
				<h3 className="App-filter-banner">Set up your study session</h3>
				<div className="custom-checkbox">
					<input type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">HTML</label>
					<input type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">CSS</label>
					<input type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">JS</label>
					<input type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">NODE</label>
					<input type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">React</label>
				</div>
				 <Link className="Nav-link" to="/flashQuiz">Start Your Study Session</Link>
			</section>
		)
	}
}