import React from "react";

export class FlashCard extends React.Component{
	render() {
		return (
			<main role="main">
			<section className="noteCard">
				<p>=========FRONT OF FLASH========</p>
				<h1 className="App-quiz-questionHeader"><img src="/media/examples/frog.png" alt="[icon of subject + clickable to docs]" /><strong>Q:</strong>What are the things</h1>
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
				<button className="App-flashcard-flip">Flip Card</button>
			</section>
			<section>
				<div className="noteCard-back">
					<p>=========Back of NoteCard=========</p>
					<h1 className="noteCard-header1">Question #111</h1>
					<p><strong>ANSWER:</strong> answer answer</p>
					<a href='#'>this is the link to the docs</a>
			<button className="App-flashcard-prev">Previous Card</button>
			<button className="App-flashcard-next">Next Card</button>
				</div>
			</section>
		</main>
		)
	}
}