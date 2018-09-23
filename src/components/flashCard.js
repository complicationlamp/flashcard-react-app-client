import React from "react";
import { API_BASE_URL } from '../config'
import './cssComponents/flashcard.css'

export class FlashCard extends React.Component{
	constructor(props) {
		super(props);
		this.userAns= null;
		this.state = {
			questions: [],
			index: 0,
			error: null,
			loading: false,
		};
		this.hide=this.hide.bind(this);
		this.handleFlip=this.handleFlip.bind(this);
		this.handleNextCard=this.handleNextCard.bind(this);
		this.handlePrevCard=this.handlePrevCard.bind(this);
		this.shuffle=this.shuffle.bind(this);
		this.handleAnswer=this.handleAnswer.bind(this);
	}
	// this is not a ttru flip in the sense of the word, both side of the card render, but back is initally hidden 
	handleFlip(e) {
		this.hide('noteCard-front');
		this.show('noteCard-back');
	}

	handleAnswer(e) {
		e.preventDefault()
		// console.log(this.userAns)
		if(this.userAns === this.state.questions[this.state.index].correctAnswer) {
			// console.log("sucess");
			this.show("fa-check");
			this.hide("fa-times")
		} else if (this.userAns !== this.state.questions[this.state.index].correctAnswer){
			// console.log("worng")
			this.show("fa-times"); 
			this.hide("fa-check");
		}
		this.handleFlip()
		e.target.reset();
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
		console.log(this.props.myQsOnly)
		this.loadQuestions()
	}

	getFilteredQuestions(questions) {
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
	}

	loadQuestions(){
		this.setState({
			error: null,
			loading:true
		});
		if( this.props.myQsOnly && this.props.userQIds && this.props.userQIds.length > 0) {
			return fetch(`${API_BASE_URL}/questions/personal`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					ids: this.props.userQIds
				}),
			})
			.then(res => {
				if (!res.ok){
					return Promise.reject(res.statusText);
				}
				return res.json();
			})
			.then(questions => {
				// console.log(questions)
				this.getFilteredQuestions(questions);
			})
			.catch(err => 
				this.setState({
					error: 'Could not load question',
					loading: false
				})
			)

		} else{
			return fetch(`${API_BASE_URL}/questions`)
				.then(res => {
					if (!res.ok){
						return Promise.reject(res.statusText);
					}
					return res.json();
				})
				.then(questions => {
					// console.log(questions)
					this.getFilteredQuestions(questions);
				})
				.catch(err => 
				this.setState({
					error: 'Could not load question',
					loading: false
				})
			);
		}
	}
	// shuffles the order of the answers, will not modify the database
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
		// with no if statement the render will fire before the fetch is returned, this will error out, the >0 will stop this
		// and will call the render again once the question length is > 0
		if (this.state.questions.length > 0){
			insertAnswerDivs = this.shuffle(this.state.questions[this.state.index].answers).map((ans, idx) => (
				<div className="shuffeled-answers-radio" key={`ans-${idx}`}>
					<input type="radio"  name="answer" id={`ans-${idx}`} onChange={(e)=> this.userAns=e.target.value} value={ans}  className="custom-control-input" required/>
					<label className="custom-control-label" htmlFor={`${ans}-${idx}`}>{ans}</label>
				</div>
			));
		}
		return (
			<main role="main" className="app-flascard">
				{
					this.state.questions.length ?
					(
						<div className="Notecard-front-back ">
							<form className="noteCard-front" onSubmit={this.handleAnswer}>
								<h1 className="App-quiz-questionHeader">
									<strong>Q: </strong>{this.state.questions[this.state.index].prompt}</h1>
									{insertAnswerDivs}
									<button className="App-flashcard-prev" disabled={this.state.index === 0 } onClick={this.handlePrevCard}>Previous Card</button>
								<button className="App-flashcard-flip" type="submit">Flip Card</button>
							</form>
							{/* ^^^^FRONT OF NOTECARD    vvvvvvv BACK OF NOTECARD */}
							<section className="noteCard-back">
								<span className="noteCard-header1">
									 {this.state.questions[this.state.index].prompt}
									<i className="fas fa-times"/><i className="fas fa-check"/>
								</span >
								<hr className="colorRed" />
								<p className="Answer-text"><strong>ANSWER:</strong> {this.state.questions[this.state.index].correctAnswer}</p>
								<a href={this.state.questions[this.state.index].link}>this is the link to the docs</a><br/>
								<button className="App-flashcard-next" onClick={this.handleNextCard}>Next Card</button>
							</section>
						</div>
					) :null 
				}
			</main>
		)
	}
}