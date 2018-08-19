import React from "react";
import {FlashCard} from './flashCard';
import {Quiz} from './quiz'


export class FlashQuiz extends React.Component {
	render() {
		return (
			<main role="main">
				<section className="noteCard">
				 <FlashCard/>
				 <Quiz/>
				</section>
			</main>
		)
	};
};