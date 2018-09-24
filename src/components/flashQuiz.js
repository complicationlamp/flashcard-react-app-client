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
			isDisabled: true,
			myQsOnly: false
		};
		this.onChangeOnlyMyQs=this.onChangeOnlyMyQs.bind(this);
		this.onStartStudySession=this.onStartStudySession.bind(this);
		this.disableButton=this.disableButton.bind(this);
	}
	componentDidMount(){
		console.log('this.currentUser', this.props.currentUser)
		this.disableButton()
	}

	onChangeOnlyMyQs(){
		this.setState({myQsOnly: !this.state.myQsOnly})
	}
	// turns off the ability to set filters if no subject is selected
	disableButton(){
		const filters = ['HTML', 'CSS', 'Javascript', 'NODE', 'jQuery', 'React'].map((subject, index) => {
			if(this.state[subject]) {
				return subject
			}
		});
		if(filters.length > 0){
			console.log(this.state.isDisabled)
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
		// console.log(this.props);
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
								<div>
									<input onChange={() => this.onChangeOnlyMyQs()} name="myQsOnly" type="checkbox" value={this.state.myQsOnly}/>
									<label>Only my questions</label>
								</div>
								<br/>
								{filters}
								<button disabled={this.state.isDisabled} onClick={this.onStartStudySession} className="start-session-btn">Start Your Study Session</button>
							</section>
						) : null
				}
				{
					this.state.viewFlashcard ?
						(<section className="noteCard row">
							<FlashCard 
								subjects={this.props.subjects}
								myQsOnly={this.state.myQsOnly} 
								userQIds={this.props.userQIds}/>
						</section>) : null
				}
			</main>
		)
	};
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser,
		userQIds: (state.auth.currentUser && state.auth.currentUser.questions) || null,
		subjects: state.profile.subjects
	}
};

export default connect(mapStateToProps)(FlashQuiz)
