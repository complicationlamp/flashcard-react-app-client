import React from "react";
import {connect} from 'react-redux';
import {FlashCard} from './flashCard';
import {setSubjectFilter} from '../actions/profile'
import './cssComponents/flashQuiz.css'

export class FlashQuiz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			HTML: false,
			CSS: false,
			JS: false,
			jQuery: false,
			NODE: false,
			React: false,
			viewFlashcard: false,
			isDisabled: true
		};
		this.onStartStudySession=this.onStartStudySession.bind(this);
		this.disableButton=this.disableButton.bind(this);
	}
	componentDidMount(){
		this.disableButton()
	}

	// turns off the ability to set filters if no subject is selected
	disableButton(){
		const filters = ['HTML', 'CSS', 'Javascript', 'NODE', 'jQuery', 'React'].map((subject, index) => {
			if(this.state[subject]) {
				return subject
			}
		});
		if(filters.length > 0){
			this.setState({isDisabled: false})
		} else {
			this.setState({isDisabled: true})
		}
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
		const filters = ['HTML', 'CSS', 'Javascript', 'NODE', 'jQuery', 'React'].map((subject, index) => (
			<div className="custom-checkbox" key={`${subject}-${index}`}>
				<input onChange={() => this.updateState(subject)} type="checkbox" className="subject-filter-checkbox" id={`${subject}-${index}`} required/>
				<label htmlFor={`${subject}-${index}`}>{subject}</label>
			</div>
		))

		return (
			<main role="main" className="app-flashQuiz row">
				{
					!this.state.viewFlashcard ?
						(
							<section className="setup-filters">
								<h3 className="App-filter-banner">Set up your study session</h3>
								{filters}
								<button onClick={this.onStartStudySession} disabled={this.state.isDisabled} className="start-session-btn">Start Your Study Session</button>
							</section>
						) : null
				}
				{
					this.state.viewFlashcard ?
						(<section className="noteCard">
							<FlashCard subjects={this.props.subjects}/>
						</section>) : null
				}
			</main>
		)
	};
};

const mapStateToProps = (state) => {
	return {
		subjects: state.profile.subjects
	}
};

export default connect(mapStateToProps)(FlashQuiz)
