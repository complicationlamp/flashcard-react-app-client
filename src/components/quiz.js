import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
export class Quiz extends React.Component{
	render(){
		const cssExampleQuestion={
			Q:"What does CSS standfor?",
			ANSWER:"Cascade Styling Sheets",
			wrongAns1:"Clear Simple Styling",
			wrongAns2:"Creative Styling Solution",
			wrongAns3:"Computed Server System",
			docsLink:"https://developer.mozilla.org/en-US/docs/Web/CSS",
			}
			function handleSubmitQuiz(e) {
				e.preventDefault();
				console.log('Submitquiz was clicked');
			}
		return (
			<main role="main">
			<section className="App-quiz">
				<h4 className="App-quiz-questionHeader"><img src="/media/examples/frog.png" alt="[icon of subject + clickable to docs]" />
				<strong>Q:</strong>{cssExampleQuestion.Q}</h4>
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
			</section>
			<section className="App-submit-answers">
				<Link className="checkans" to="/components/feedback"><button onClick={handleSubmitQuiz}>Submit Answer</button></Link>
			</section>
		</main>
		)
	}
}