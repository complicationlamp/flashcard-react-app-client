import React from 'react';
import {setSubjectFilter} from '../actions/profile'

export class Filter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			HTML: false,
			CSS: false,
			JS: false,
			NODE: false,
			React: false
		};
		this.updateSubjectSelection=this.updateSubjectSelection.bind(this);
	}
	updateState(subject) {
		this.setState({[subject]: !this.state[subject]})
	}
	updateSubjectSelection(){
		const selectedSubjects = Object.keys(this.state).filter(key => this.state[key] === true);
		setSubjectFilter(selectedSubjects);
		window.location.replace('/flashQuiz')
	}
	render() {
		return (
			<section>
			{/* // ==============================BUILD NOTES================================ */}
			 {/* TODO: when out of small screen view make this snap to a sidebar */}
			 {/* ==============================BUILD NOTES================================ */}
				<h3 className="App-filter-banner">Set up your study session</h3>
				<div className="custom-checkbox">
					<input onChange={() => this.updateState('HTML')} type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">HTML</label>
					<input onChange={() => this.updateState('CSS')} type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">CSS</label>
					<input onChange={() => this.updateState('JS')} type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">JS</label>
					<input onChange={() => this.updateState('NODE')} type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">NODE</label>
					<input onChange={() => this.updateState('React')} type="checkbox" className="custom-control-input" id="customCheck1"/>
					<label className="custom-control-label">React</label>
				</div>
				 <button onClick={this.updateSubjectSelection} className="Nav-link">Start Your Study Session</button>
			</section>
		)
	}
}

