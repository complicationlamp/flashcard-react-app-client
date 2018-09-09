import React from "react";
import { API_BASE_URL } from '../config'
export class FlashCard extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			questions: [],
			index: 0,
			error: null,
            loading: false
		};
		this.hide=this.hide.bind(this);
		this.handleFlip=this.handleFlip.bind(this);
		this.handleNextCard=this.handleNextCard.bind(this);
		this.handlePrevCard=this.handlePrevCard.bind(this);
	}
	handleFlip(e) {
		e.preventDefault();
		this.hide('noteCard-front');
		this.show('noteCard-back');
	}
	handlePrevCard(e) {
		e.preventDefault();
		this.setState({index: this.state.index -1})
		this.show('noteCard-front');
		this.hide('noteCard-back')
	}
	handleNextCard(e) {
		e.preventDefault();

		if ( this.state.index < this.state.questions.length - 1 ){
			this.setState({index: this.state.index +1})
			this.show('noteCard-front');
			this.hide('noteCard-back');
		} else {
			return window.location.replace('/profile')

		}
	}
	//getElementbyID/getElementByClassName always returns an array so we need a [0] to tell it what to hide.
	hide(target) {
		document.getElementsByClassName(target)[0].style.display = 'none';
	}
	show(target){
		document.getElementsByClassName(target)[0].style.display = 'block';
	}
	componentDidMount() {
		this.loadQuestions()
	}
	loadQuestions(){
		this.setState({
			error: null,
			loading:true
		});
		return fetch(`${API_BASE_URL}/questions`)
			.then(res => {
				if (!res.ok){
					return Promise.reject(res.statusText);
				}
				return res.json();
			})
			.then(questions => {
				const filteredQuestions = questions.filter((question) => {
					// flitering by this.props.subject
					// if this.props.subjects.indexof is >=o (if it matchs/ if the same 
					// subject is in the question object as our subject filters on porps)
					// return those questions
					return this.props.subjects.indexOf(question.subject) >=0;
				})
				

				this.setState({
					questions: filteredQuestions,
					loading: false
				})
				this.hide('noteCard-back');
			})
			.catch(err => 
			this.setState({
				error: 'Could not load question',
				loading: false
			})
		);
	}
	// function to randomize the order of the answers on the flashcard
	shuffle(questionObject){
		const ansArray = []
		const retArray = [];
		ansArray.push(
			questionObject.answer,
			questionObject.wrongAnsOne,
			questionObject.wrongAnsTwo,
			questionObject.wrongAnsThree
		)

		let randomIndex;
		while (ansArray.length !== 0){
			randomIndex = Math.floor(Math.random() * ansArray.length);
			retArray.push(ansArray.splice(randomIndex, 1))
		}
		// last step is needed or else it will return an array of arrays, eave containing 1 answer
		// finalArray.push(answer[0])   this denotes that we just want the contents (at 0, becaus one one)
		let finalArray= [];
		retArray.forEach((answer) => { 
			finalArray.push(answer[0])
		})
		return finalArray;
	}

	render() {
		const cssExampleQuestion = {
			subject: "JS",
			question:"What does CSS standfor?",
			answer:"Cascade Styling Sheets",
			wrongAnsOne:"Clear Simple Styling",
			wrongAnsTwo:"Creative Styling Solution",
			wrongAnsThree:"Computed Server System",
			link:"https://developer.mozilla.org/en-US/docs/Web/CSS",
		}
		// let questions = [cssExampleQuestion];
		// if (this.state.questions.length > 0) {
		// 	questions = this.state.questions
		// }

		const shuffeledAnswers = this.state.questions.length > 0 && this.state.questions.length > this.state.index ? this.shuffle(this.state.questions[this.state.index]) : this.shuffle(cssExampleQuestion);
		// this function puts the randomized answers on the card
		const insertAnswerDivs = shuffeledAnswers.map((answer, index) => (
			<div className="shuffeled-answers-radio">
				<input type="radio" id={`${answer}-${index}`} name="ans" className="custom-control-input"/>
				<label className="custom-control-label" htmlFor={`${answer}-${index}`}>{answer}</label>
			</div>
		))

		return (
			<main role="main">
				{
					this.state.questions.length ?
					(
						<div>
							<section className="noteCard-front">
								<h1 className="App-quiz-questionHeader">
									<strong>Q:</strong>{this.state.questions[this.state.index].question}</h1>
									{insertAnswerDivs}
								<button className="App-flashcard-flip" onClick={this.handleFlip}>Flip Card</button>
								<button className="App-flashcard-prev" onClick={this.handlePrevCard}>Previous Card</button>
							</section>
							{/* ^^^^FRONT OF NOTECARD    vvvvvvv BACK OF NOTECARD */}
							<section>
								<div className="noteCard-back">
									<h1 className="noteCard-header1">{this.state.questions[this.state.index].question}</h1>
									<p><strong>ANSWER:</strong> {this.state.questions[this.state.index].answer}</p>
									<a href={this.state.questions[this.state.index].link}>this is the link to the docs</a>
									<button className="App-flashcard-next" onClick={this.handleNextCard}>Next Card</button>
								</div>
							</section>
						</div>
					) :null 
				}
			</main>
		)
	}
}