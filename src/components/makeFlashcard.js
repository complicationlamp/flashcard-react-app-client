import React from 'react';

export class MakeFlashcard extends React.Component {
	render() {
		return (
			<form id="App-newFlashCard">
				<div class="form-section">
					<label for="flashcard-question">Question </label>
					<input type="text" name="flashcard-question" placeholder="CSS stands for?" required/>
				</div>
				<div class="form-section">
					<label for="flashcard-right-answer">What's the correct answer?</label>
					<input type="text" name="flashcard-right-answer" placeholder="Cascade Styling Sheets" required/>
				</div>
				<div class="form-section">
					<label for="flashcard-wrong-answer">Write a fake answer?</label>
					<input type="text" name="flashcard-wrong-answer" placeholder="Creedence Stillwater Survival" required/>
				</div>
				<div class="form-section">
					<label for="flashcard-wrong-answer">Write a fake answer?</label>
					<input type="text" name="flashcard-wrong-answer" placeholder="Comp Sci Styling" required/>
				</div>
				<div class="form-section">
					<label for="flashcard-wrong-answer">Write a fake answer?</label>
					<input type="text" name="flashcard-wrong-answer" placeholder="Computer Systematic Structure" required/>
				</div>
				<div class="form-section">
					<p>What subject is this?</p>
					<input type="radio" name="subject-type" value="0" class="subject-type-radio" checked/>
					<label for="subject-type">
						<span>CSS</span>
          	  		</label>
					<input type="radio" name="subject-type" value="0" class="subject-type-radio" checked/>
					<label for="subject-type">	
						<span>HTML</span>
           			 </label>
					<input type="radio" name="subject-type" value="0" class="subject-type-radio" checked/>
					<label for="subject-type">
						<span>Javascript</span>
            		</label>
					<input type="radio" name="subject-type" value="0" class="subject-type-radio" checked/>
					<label for="subject-type">
						<span>React</span>
            		</label>
					<input type="radio" name="subject-type" value="0" class="subject-type-radio" checked/>
					<label for="subject-type">
						<span>JQuery</span>
           			 </label>
				</div>
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</form>
		)
	}
}