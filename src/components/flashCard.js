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
		this.shuffle=this.shuffle.bind(this);
		this.handleAnswer=this.handleAnswer.bind(this);
	}
	handleFlip(e) {
		e.preventDefault();
		this.hide('noteCard-front');
		this.show('noteCard-back');
	}

	handleAnswer(e) {
		// console.log(e.currentTarget.value)
		const radios = e.currentTarget.value;
		if(radios === this.state.questions[this.state.index].correctAnswer) {
			// console.log("sucess");
			this.show("noteCard-back-correct");
			this.hide("noteCard-back-wrong")
		} else if (radios != this.state.questions[this.state.index].correctAnswer){
			// console.log("worng")
			this.show("noteCard-back-wrong"); 
			this.hide("noteCard-back-correct")
		}
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
				console.log(questions)
				const filteredQuestions = questions.filter((question) => {
					// flitering by this.props.subject
					// if this.props.subjects.indexof is >=o (if it matchs/ if the same 
					// subject is in the question object as our subject filters on porps)
					// return those questions
					return this.props.subjects.indexOf(question.subject) >=0;
				})
				// .catch(err=> {
				// 	console.log(err)
				// })
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
	shuffle(a) {
		let j, x, i;
		for (i = a.length - 1; i > 0; i--) {
		  j = Math.floor(Math.random() * (i + 1));
		  x = a[i];
		  a[i] = a[j];
		  a[j] = x;
		}
		return a;
	};


	render() {
		let insertAnswerDivs;
		if (this.state.questions.length > 0){
			console.log(this.state.questions)
			insertAnswerDivs = this.shuffle(this.state.questions[this.state.index].answers).map((ans, idx) => (
				<div className="shuffeled-answers-radio" key={`ans-${idx}`}>
					<input onChange={this.handleAnswer} type="radio"  name="answer" id={`ans-${idx}`} value={ans}  className="custom-control-input"/>
					<label className="custom-control-label" htmlFor={`${ans}-${idx}`}>{ans}</label>
				</div>
			));
		}
		return (
			<main role="main">
				{
					this.state.questions.length ?
					(
						<div>
							<section className="noteCard-front">
								<h1 className="App-quiz-questionHeader">
									<strong>Q:</strong>{this.state.questions[this.state.index].prompt}</h1>
									{insertAnswerDivs}
								<button className="App-flashcard-flip" onClick={this.handleFlip}>Flip Card</button>
								<button className="App-flashcard-prev" onClick={this.handlePrevCard}>Previous Card</button>
							</section>
							{/* ^^^^FRONT OF NOTECARD    vvvvvvv BACK OF NOTECARD */}
							<section>
								<div className="noteCard-back">
									<h1 className="noteCard-header1">{this.state.questions[this.state.index].prompt}</h1>
									<h2 className="noteCard-back-correct">Correct!</h2>
									<h2 className="noteCard-back-wrong">Wrong Answer</h2>
									<p><strong>ANSWER:</strong> {this.state.questions[this.state.index].correctAnswer}</p>
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