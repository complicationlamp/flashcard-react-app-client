import React from "react";
import {Feedback} from './feedback'

import './cssComponents/home.css'

export class Home extends React.Component {
	render() {
		const subjects=['HTML', 'CSS', 'JS', 'Jquery', 'NODE', 'React'].map((subject) => (
		<ul className="App-subjects">
			<li className="App-subject-toggle">{subject}</li>
		</ul>
		));

		return (
			<main role="main" className="App-about">
				<section className="App-about-intro">
					<header role="header">
						<h1>Flash till you crash</h1>
						<h2 className="App-about-intro-text">
							A simple Flashcard application where the user has the ability to combine subjects into a deck.
							Have something to contribute? Login and head over to the profile section where you can make a card
							the whole comunity can enjoy. If you'd like to demo, head over to Login where a sample login has been set up.
						</h2>
					</header>
				</section>
				<section className="App-about-steps">
					<h3>First: login</h3>
					<h3 className="App-about-steps-text">First: Choose your contnet</h3>
					{subjects}
					<h4 className="App-about-steps-text">Lastly: review the feedback to hone in on what you need to work on</h4>
					<Feedback />
				</section>
			</main>
		)
	}
}