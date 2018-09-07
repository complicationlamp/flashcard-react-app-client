import React from 'react';
import { API_BASE_URL } from '../config'

export class MakeFlashcard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subject: "",
			question:"",
			answer:"",
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
			question:"",
			answer:"",
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

		// const value = this.input.value;
		// console.log(value);
		return fetch(`${API_BASE_URL}/questions`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				subject: this.state.subject,
				question: this.state.question,
				answer: this.state.answer,
				wrongAnsOne: this.state.wrongAnsOne,
				wrongAnsTwo: this.state.wrongAnsTwo,
				wrongAnsThree: this.state.wrongAnsThree,
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
		})
	};

	render() {
		return (
			<form id="App-newFlashCard" onSubmit={this.onSubmit}>
				<div class="form-section">
					<label htmlFor="flashcard-question">Question </label>
					<input value={this.state.question} onChange={event => this.updateState('question', event.target.value)} type="text" name="flashcard-question" placeholder="CSS stands for?" required/>
				</div>
				<div class="form-section">
					<label htmlFor="flashcard-right-answer">What's the correct answer?</label>
					<input value={this.state.answer} onChange={event => this.updateState('answer', event.target.value)}type="text" name="flashcard-right-answer" placeholder="Cascade Styling Sheets" required/>
				</div>
				<div class="form-section">
					<label htmlFor="flashcard-wrong-answer">Write a fake answer?</label>
					<input value={this.state.wrongAnsOne} onChange={event => this.updateState('wrongAnsOne', event.target.value)} type="text" name="flashcard-wrong-answer" placeholder="Creedence Stillwater Survival" required/>
				</div>
				<div class="form-section">
					<label htmlFor="flashcard-wrong-answer">Write a fake answer?</label>
					<input value={this.state.wrongAnsTwo} onChange={event => this.updateState('wrongAnsTwo', event.target.value)} type="text" name="flashcard-wrong-answer" placeholder="Comp Sci Styling" required/>
				</div>
				<div class="form-section">
					<label htmlFor="flashcard-wrong-answer">Write a fake answer?</label>
					<input value={this.state.wrongAnsThree} onChange={event => this.updateState('wrongAnsThree', event.target.value)} type="text" name="flashcard-wrong-answer" placeholder="Computer Systematic Structure" />
				</div>
				<div class="form-section">
					<label htmlFor="flashcard-link">Link</label>
					<input value={this.state.link} onChange={event => this.updateState('link', event.target.value)} type="url" name="flashcard-link" placeholder="www.someplace.com"/>
				</div>
				<div class="form-section">
					<p>What subject is this?</p>
					<input onClick={event => this.updateState('subject', 'CSS')} type="radio" name="subject-type" value={this.state.subject === 'CSS'} class="subject-type-radio" />
					<label htmlFor="subject-type">
						<span>CSS</span>
          	  		</label>
					<input onClick={event => this.updateState('subject', 'HTML')} type="radio" name="subject-type" value={this.state.subject === 'HTML'} class="subject-type-radio" />
					<label htmlFor="subject-type">	
						<span>HTML</span>
           			 </label>
					<input onClick={event => this.updateState('subject', 'Javascript')} type="radio" name="subject-type" value={this.state.subject === 'Javascript'} class="subject-type-radio" />
					<label htmlFor="subject-type">
						<span>Javascript</span>
            		</label>
					<input onClick={event => this.updateState('subject', 'React')} type="radio" name="subject-type" value={this.state.subject === 'React'} class="subject-type-radio" />
					<label htmlFor="subject-type">
						<span>React</span>
            		</label>
					<input onClick={event => this.updateState('subject', 'jQuery')} type="radio" name="subject-type" value={this.state.subject === 'jQuery'} class="subject-type-radio" />
					<label htmlFor="subject-type">
						<span>JQuery</span>
           			 </label>
				</div>
				<button type="submit" >Submit</button>
				<button type="reset" onClick={this.handleReset}>Reset</button>
			</form>
		)
	}
}