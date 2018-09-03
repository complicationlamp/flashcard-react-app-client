import React from 'react';
import {Link} from 'react-router-dom';
import { API_BASE_URL } from '../config'
export class Quiz extends React.Component{
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
	

	render(){
		const cssExampleQuestion={
			subject: "CSS",
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
			};

			function handleSubmitQuiz(e) {
				e.preventDefault();
				console.log('Submitquiz was clicked');
			}
		return (
			<main role="main">{
					this.state.questions.length > 0 ?
					(
						<div>
							<section className="App-quiz">
								<h4 className="App-quiz-questionHeader">
								<strong>Q:</strong>{this.state.questions[0].question}</h4>
								<div class="custom-control custom-radio">
									<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
									<label class="custom-control-label" for="customRadio1">{this.state.questions[0].answer}</label>
								</div>
								<div class="custom-control custom-radio">
									<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
									<label class="custom-control-label" for="customRadio2">{this.state.questions[0].wrongAnsOne}</label>
								</div>
								<div class="custom-control custom-radio">
									<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
									<label class="custom-control-label" for="customRadio1">{this.state.questions[0].wrongAnsTwo}</label>
								</div>
								<div class="custom-control custom-radio">
									<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
									<label class="custom-control-label" for="customRadio2">{this.state.questions[0].wrongAnsThree}</label>
								</div>
							</section>
							<section className="App-submit-answers">
								<Link className="checkans" to="/components/feedback"><button onClick={handleSubmitQuiz}>Submit Answer</button></Link>
							</section>
					</div>
				) :null
			}
		</main>
		)
	}
}