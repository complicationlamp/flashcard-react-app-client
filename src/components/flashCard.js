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
		console.log('Flip was clicked');
		this.hide('noteCard-front');
		this.show('noteCard-back');

	}
	handlePrevCard(e) {
		e.preventDefault();
		this.setState({index: this.state.index -1})
		this.show('noteCard-front');
		this.hide('noteCard-back')
		console.log(this.state.index);
	}
	handleNextCard(e) {
		e.preventDefault();
		this.setState({index: this.state.index +1})
		this.show('noteCard-front');
		this.hide('noteCard-back');
		console.log(this.state.index);
	}

	//getElementbyID/getElementByClassName always returns an array so we need a [0] to tell it what to hide.
	hide(target) {
		document.getElementsByClassName(target)[0].style.display = 'none';
	}

	show(target){
		document.getElementsByClassName(target)[0].style.display = 'block';
	}

	componentDidMount() {
		this.laodQuestion()
	}
	laodQuestion(){
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
				this.setState({
					questions: questions,
					loading: false
				})
				this.hide('noteCard-back');
			}
			)
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

		let currentIndex = ansArray.length,temporaryValue, randomIndex;
		// while (0 !== currentIndex) {
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
		let questions = [cssExampleQuestion];
		if (this.state.questions.length > 0) {
			questions = this.state.questions
		}

		const shuffeledAnswers = this.state.questions.length >0 ? this.shuffle(this.state.questions[this.state.index]) : this.shuffle(cssExampleQuestion);

		return (
			<main role="main">
				{
					this.state.questions.length > 0 ?
					(
						<div>
							<section className="noteCard-front">
								<p>=========FRONT OF FLASH========</p>
								<h1 className="App-quiz-questionHeader">
									{/* <img src="/media/examples/frog.png" alt="[icon of subject + clickable to docs]" /> */}
									<strong>Q:</strong>{this.state.questions[this.state.index].question}</h1>
								<div class="custom-control custom-radio">
									<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
									<label class="custom-control-label" for="customRadio1">{shuffeledAnswers[0]}</label>
								</div>
								<div class="custom-control custom-radio">
									<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
									<label class="custom-control-label" for="customRadio2">{shuffeledAnswers[1]}</label>
								</div>
								<div class="custom-control custom-radio">
									<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
									<label class="custom-control-label" for="customRadio1">{shuffeledAnswers[2]}</label>
								</div>
								<div class="custom-control custom-radio">
									<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
									<label class="custom-control-label" for="customRadio2">{shuffeledAnswers[3]}</label>
								</div>
								<button className="App-flashcard-flip" onClick={this.handleFlip}>Flip Card</button>
								<button className="App-flashcard-prev" onClick={this.handlePrevCard}>Previous Card</button>
							</section>
							<section>
								<div className="noteCard-back">
									<p>=========Back of NoteCard=========</p>
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