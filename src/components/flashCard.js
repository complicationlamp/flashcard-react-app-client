import React from "react";
import { API_BASE_URL } from '../config'
export class FlashCard extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			questions: [],
			error: null,
            loading: false
		};
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
			}
			)
			.catch(err => 
			this.setState({
				error: 'Could not load question',
				loading: false
			})
		);
	}


	render() {

		const exampleQ = {
			prompt: 'What am I studying?',
			answers: ['idk tbh', 'math?'],
			correctIdx: 0
		}
		const cssExampleQuestion = {
			Q:"What does CSS standfor?",
			ANSWER:"Cascade Styling Sheets",
			wrongAnsOne:"Clear Simple Styling",
			wrongAnsTwo:"Creative Styling Solution",
			wrongAnsThree:"Computed Server System",
			docsLink:"https://developer.mozilla.org/en-US/docs/Web/CSS",
			}
		let questions = [cssExampleQuestion];
		if (this.state.questions) {
			questions = this.state.questions
		}
		console.log(questions)
			function handleFlip(e) {
				e.preventDefault();
				console.log('Flip was clicked');
			}
			function handlePrevCard(e) {
				e.preventDefault();
				console.log('Previous card was clicked');
			}
			function handleNextCard(e) {
				e.preventDefault();
				console.log('Next card was clicked');
			}
		return (
			<main role="main">
			<section className="noteCard">
				<p>=========FRONT OF FLASH========</p>
				<h1 className="App-quiz-questionHeader">
					<img src="/media/examples/frog.png" alt="[icon of subject + clickable to docs]" />
					<strong>Q:</strong>{}</h1>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio1">{cssExampleQuestion.wrongAns1}</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio2">{cssExampleQuestion.ANSWER}</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio1">{cssExampleQuestion.wrongAns2}</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio2">{cssExampleQuestion.wrongAns3}</label>
				</div>
				<button className="App-flashcard-flip" onClick={handleFlip}>Flip Card</button>
			</section>
			<section>
				<div className="noteCard-back">
					<p>=========Back of NoteCard=========</p>
					<h1 className="noteCard-header1">{cssExampleQuestion.Q}</h1>
					<p><strong>ANSWER:</strong> {cssExampleQuestion.ANSWER}</p>
					<a href={cssExampleQuestion.docsLink}>this is the link to the docs</a>
			<button className="App-flashcard-prev" onClick={handlePrevCard}>Previous Card</button>
			<button className="App-flashcard-next" onClick={handleNextCard}>Next Card</button>
				</div>
			</section>
		</main>
		)
	}
}