import React from 'react';

export class Quiz extends React.Component{
	render(){
		return (
			<main role="main">
			<section className="App-quiz">
				<h4 className="App-quiz-questionHeader"><img src="/media/examples/frog.png" alt="[icon of subject + clickable to docs]" /><strong>Q:</strong>What are the things</h4>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio1">Answere 1</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio2">Answer 2</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio1">Answere 3</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio2">Answer 4</label>
				</div>
				<h4 className="App-quiz-questionHeader"><img src="/media/examples/frog.png" alt="[icon of subject + clickable to docs]" /><strong>Q:</strong>What are the things</h4>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio1">Answere 1</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio2">Answer 2</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio1">Answere 3</label>
				</div>
				<div class="custom-control custom-radio">
					<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadio2">Answer 4</label>
				</div>
			</section>
			<section className="App-submit-answers">
				<button className="App-quiz-checkans">Submit Answer</button>
			</section>
		</main>
		)
	}
}