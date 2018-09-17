import React from 'react';
import { API_BASE_URL } from '../config'

import './cssComponents/makeFlashcard.css'

export class MakeFlashcard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subject: "",
			prompt:"",
			correctAnswer:"", 
			wrongAnsOne:"",
			wrongAnsTwo:"",
			wrongAnsThree:"",
			link:"",
			error: null,
            loading: false
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	componentDidMount(){
		this.hide('successfulSubmit')
	}

	handleClick(e) {
		e.preventDefault();
		console.log('submit was clicked');
	}
	handleReset(e) {
		e.preventDefault();
		this.resetForm();
	}

	resetForm() {
		return this.setState({
			subject: "",
			prompt:"",
			correctAnswer:"", 
			wrongAnsOne:"",
			wrongAnsTwo:"",
			wrongAnsThree:"",
			link:""
		})
	}

	updateState(field, input) {
		this.setState({[field]: input})
	}
	onSubmit(e){
		e.preventDefault();
		return fetch(`${API_BASE_URL}/questions`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				subject: this.state.subject,
				prompt: this.state.prompt,
				correctAnswer: this.state.correctAnswer,
				answers: [this.state.correctAnswer, this.state.wrongAnsOne, this.state.wrongAnsTwo, this.state.wrongAnsThree],
				link: this.state.link
			}),
		})
		
		.then(res => {
			if (!res.ok){
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(()=> {
			this.resetForm();
			this.show('successfulSubmit')
		})
	};
	hide(target) {
		if(document.getElementsByClassName(target)[0]) {
			document.getElementsByClassName(target)[0].style.display = 'none';
		}
	}
	show(target){
		document.getElementsByClassName(target)[0].style.display = 'block';
	}

	render() {
		return (
			<div>
				<div className="successfulSubmit row">Card added to the deck! Add another?</div>
				<form id="App-newFlashCard" onSubmit={this.onSubmit} className="app-makeFlashcard">
					<div className="flashcard-content">
					<h1 className="heading">Please Add a Flashcard</h1>
						<div className="form-section">
							<label htmlFor="flashcard-question" className="make-flashcard-question">Question </label>
							<input value={this.state.prompt} onChange={event => this.updateState('prompt', event.target.value)} type="text" name="flashcard-question" placeholder="CSS stands for?" required/>
						</div>
						<div className="form-section">
							<label htmlFor="flashcard-right-answer"className="make-flashcard-question">What's the correct answer?</label>
							<input value={this.state.correctAnswer} onChange={event => this.updateState('correctAnswer', event.target.value)}type="text" name="flashcard-right-answer" placeholder="Cascade Styling Sheets" required/>
						</div>
						<div className="form-section">
							<label htmlFor="flashcard-wrong-answer" className="make-flashcard-question">Write a fake answer?</label>
							<input value={this.state.wrongAnsOne} onChange={event => this.updateState('wrongAnsOne', event.target.value)} type="text" name="flashcard-wrong-answer-one" placeholder="Cry Strive Survive" required/>
						</div>
						<div className="form-section">
							<label htmlFor="flashcard-wrong-answer" className="make-flashcard-question">Write a fake answer?</label>
							<input value={this.state.wrongAnsTwo} onChange={event => this.updateState('wrongAnsTwo', event.target.value)} type="text" name="flashcard-wrong-answer-two" placeholder="Comp Sci Styling" required/>
						</div>
						<div className="form-section">
							<label htmlFor="flashcard-wrong-answer" className="make-flashcard-question">Write a fake answer?</label>
							<input value={this.state.wrongAnsThree} onChange={event => this.updateState('wrongAnsThree', event.target.value)} type="text" name="flashcard-wrong-answer-three" placeholder="Computer Systematic Structure" />
						</div>
						<div className="form-section">
							<label htmlFor="flashcard-link" className="make-flashcard-question">Link</label>
							<input value={this.state.link} onChange={event => this.updateState('link', event.target.value)} type="url" name="flashcard-link" placeholder="www.someplace.com"/>
						</div>
					</div>
					<form className="subject-selection">
						<h2 className="subject-selection">What subject is this?</h2>
						<input onClick={event => this.updateState('subject', 'CSS')} type="radio" name="subject-type" value={this.state.subject === 'CSS'} className="subject-type-radio" />
						<label htmlFor="subject-type">
							<span>CSS</span>
						</label>
						<input onClick={event => this.updateState('subject', 'HTML')} type="radio" name="subject-type" value={this.state.subject === 'HTML'} className="subject-type-radio" />
						<label htmlFor="subject-type">	
							<span>HTML</span>
						</label>
						<input onClick={event => this.updateState('subject', 'Javascript')} type="radio" name="subject-type" value={this.state.subject === 'Javascript'} className="subject-type-radio" />
						<label htmlFor="subject-type">
							<span>Javascript</span>
						</label>
						<input onClick={event => this.updateState('subject', 'React')} type="radio" name="subject-type" value={this.state.subject === 'React'} className="subject-type-radio" />
						<label htmlFor="subject-type">
							<span>React</span>
						</label>
						<input onClick={event => this.updateState('subject', 'jQuery')} type="radio" name="subject-type" value={this.state.subject === 'jQuery'} className="subject-type-radio" />
						<label htmlFor="subject-type">
							<span>jQuery</span>
						</label>
							<input onClick={event => this.updateState('subject', 'NODE')} type="radio" name="subject-type" value={this.state.subject === 'NODE'} className="subject-type-radio" />
						<label htmlFor="subject-type">
							<span>NODE</span>
						</label>
					</form>
					<button type="submit">Submit</button>
					<button type="reset" onClick={this.handleReset}>Reset</button>
				</form>
			</div>
		)
	}
}