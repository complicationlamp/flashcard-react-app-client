import React from 'react';
import {connect} from 'react-redux'
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
		this.props.dispatch(setSubjectFilter(selectedSubjects));
		window.location.replace('/flashQuiz')
	}
	render() {
		console.log(this.props)
		const filters = ['HTML', 'CSS', 'JS', 'NODE', 'React'].map((subject, index) => (
			<div className="custom-checkbox">
				<input onChange={() => this.updateState(subject)} type="checkbox" className="custom-control-input" id={`${subject}-${index}`}/>
				<label htmlFor={`${subject}-${index}`}>{subject}</label>
			</div>
		))
		return (
			<section>
			{/* // ==============================BUILD NOTES================================ */}
			 {/* TODO: when out of small screen view make this snap to a sidebar */}
			 {/* ==============================BUILD NOTES================================ */}
				<h3 className="App-filter-banner">Set up your study session</h3>
				{filters}
				 <button onClick={this.updateSubjectSelection} className="Nav-link">Start Your Study Session</button>
			</section>
		)
	}
}

export default connect()(Filter)
