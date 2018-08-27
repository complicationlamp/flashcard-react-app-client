import React from "react";
import {FlashCard} from './flashCard';
import {Quiz} from './quiz'
import {CLIENT_ORIGIN} from '../config'


export class FlashQuiz extends React.Component {
	render() {
		return (
			<main role="main">
				<section className="noteCard">
				{/* ==========================BUILD NOTES=============================== */}
				{/* NEED TO MAKE SOME SORT OF SWITCH WORK FOR THIS  */}
				{/* TODO: this needs to be worked on */}
				{/* {format ==="Flashcard" ? <FlashCard/>:<Quiz/>} */}
				<FlashCard/>
				<Quiz/>
				</section>
			</main>
		)
	};
};