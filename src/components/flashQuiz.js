import React from "react";
import {FlashCard} from './flashCard';
import {Quiz} from './quiz'


export class FlashQuiz extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subject: {},
			question: {},
			answer: {},
			wrongAnsOne: {},
			wrongAnsTwo: {},
			wrongAnsThree: {}, 
			link: {}
		};
	}

	componentDidMount() {
		this.laodQuestion()
	}
	laodQuestion(){
		this.setState({
		});
		return fetch('{}')
	}
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