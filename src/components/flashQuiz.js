import React from "react";
import {FlashCard} from './flashCard';

export class FlashQuiz extends React.Component {
	render() {
		return (
			<main role="main">
				<section className="noteCard">
					<FlashCard/>
				</section>
			</main>
		)
	};
};