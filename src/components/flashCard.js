import React from "react";
import { API_BASE_URL } from '../config'
import {connect} from "react-redux";
export class FlashCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			questions: [],
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
		console.log('Previous card was clicked');
		this.show('noteCard-front');
		this.hide('noteCard-back');
	}
	handleNextCard(e) {
		e.preventDefault();
		console.log('Next card was clicked');
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
		return fetch(`${API_BASE_URL}/questions?subjects=${this.props.subjects}`)
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
		// console.log(questions)

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
									<strong>Q:</strong>{this.state.questions[0].question}</h1>
								<div className="custom-control custom-radio">
									<input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
									<label className="custom-control-label" htmlFor="customRadio1">{this.state.questions[0].wrongAnsOne}</label>
								</div>
								<div className="custom-control custom-radio">
									<input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
									<label className="custom-control-label" htmlFor="customRadio2">{this.state.questions[0].answer}</label>
								</div>
								<div className="custom-control custom-radio">
									<input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
									<label className="custom-control-label" htmlFor="customRadio1">{this.state.questions[0].wrongAnsTwo}</label>
								</div>
								<div className="custom-control custom-radio">
									<input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
									<label className="custom-control-label" htmlFor="customRadio2">{this.state.questions[0].wrongAnsThree}</label>
								</div>
								<button className="App-flashcard-flip" onClick={this.handleFlip}>Flip Card</button>
							</section>
							<section>
								<div className="noteCard-back">
									<p>=========Back of NoteCard=========</p>
									<h1 className="noteCard-header1">{this.state.questions[0].question}</h1>
									<p><strong>ANSWER:</strong> {this.state.questions[0].answer}</p>
									<a href={this.state.questions[0].link}>this is the link to the docs</a>
									<button className="App-flashcard-prev" onClick={this.handlePrevCard}>Flip Back</button>
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

const mapStateToProps = state => ({
	subjects: state.profile.subjects
});

export default connect(mapStateToProps)(FlashCard)