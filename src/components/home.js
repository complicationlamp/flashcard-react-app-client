import React from "react";
import {Feedback} from './feedback'

export class Home extends React.Component {
	render() {
		const subjects=['HTML', 'CSS', 'JS', 'Jquery', 'NODE', 'React'].map((subject) => (
		<ul className="App-subjects">
			<li className="App-subject-toggle">{subject}</li>
		</ul>
		));

		return (
			<main role="main">
				<section className="App-about">
					<header role="header">
						<h1>Flash till you crash</h1>
						<h2>Customizable flash cards to inform user areas of strength and weaknesses
						</h2>
					</header>
				</section>
				<section className="App-about-graphic">
					<h3 className="App-about-header">Build a custom flashcard deck</h3>
					<h4 className="App-about-steps">First: Choose your contnet</h4>
					{subjects}
					<h3 className="App-about-steps">Lastly: review the feedback to hone in on what you need to work on</h3>
					<Feedback />
				</section>
			</main>
		)
	}
}