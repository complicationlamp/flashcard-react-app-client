import React from "react";
import {FlashCard} from './flashCard';
import {Quiz} from './quiz'


export class FlashQuiz extends React.Component {
	render() {
		const format="Quiz";
		return (
			<main role="main">
				<section className="noteCard">
				{/* TODO: this needs to be worked on */}
				{format ==="Flashcard" ? <FlashCard/>:<Quiz/>}
				</section>
			</main>
		)
	};
};