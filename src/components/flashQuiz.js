import React from "react";
import {connect} from 'react-redux';
import {FlashCard} from './flashCard';
import {setSubjectFilter} from '../actions/profile'

export class FlashQuiz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			HTML: false,
			CSS: false,
			JS: false,
			NODE: false,
			React: false,
			viewFlashcard: false
		};
		this.onStartStudySession=this.onStartStudySession.bind(this);
	}
	updateState(subject) {
		this.setState({[subject]: !this.state[subject]})
	}
	onStartStudySession(){
		const selectedSubjects = Object.keys(this.state).filter(key => this.state[key] === true);
		this.props.dispatch(setSubjectFilter(selectedSubjects))

		this.setState({ viewFlashcard: true });
	}
	render() {
		const filters = ['HTML', 'CSS', 'JS', 'NODE', 'React'].map((subject, index) => (
			<div className="custom-checkbox">
				<input onChange={() => this.updateState(subject)} type="checkbox" className="custom-control-input" id={`${subject}-${index}`}/>
				<label htmlFor={`${subject}-${index}`}>{subject}</label>
			</div>
		))

		return (
			<main role="main">
				{
					!this.state.viewFlashcard ?
						(
							<section>
								{/* // ==============================BUILD NOTES================================ */}
								{/* TODO: when out of small screen view make this snap to a sidebar */}
								{/* ==============================BUILD NOTES================================ */}
								<h3 className="App-filter-banner">Set up your study session</h3>
								{filters}
								<button onClick={this.onStartStudySession} className="Nav-link">Start Your Study Session</button>
							</section>
						) : null
				}

				{
					this.state.viewFlashcard ?
						(<section className="noteCard">
							<FlashCard/>
						</section>) : null
				}
			</main>
		)
	};
};

const mapStateToProps = (state) => {
	return {
    	userid: state.auth.currentUser && state.auth.currentUser.id || null
	}
};

export default connect(mapStateToProps)(FlashQuiz)
