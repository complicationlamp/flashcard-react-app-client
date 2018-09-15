import React from "react";
// import {Feedback} from './feedback'

import './cssComponents/home.css'

export class Home extends React.Component {
	render() {
		const subjects=['HTML', 'CSS', 'JS', 'Jquery', 'NODE', 'React'].map((subject) => (
		<ul className="App-subjects">
			<li className="App-subject-toggle">{subject}</li>
		</ul>
		));

		return (
			<main role="main" className="App-about row">
				<section className="App-about-intro col-12">
					<header role="header">
						<h1 className="App-about-intro-header">Welcome to FlashQuiz</h1>
							<p>
							A simple Flashcard application where the user has the ability to combine subjects into a deck.<br/>
							Have something to contribute? <br/>Login and head over to the profile section where you can make a card
							the whole comunity can enjoy. <br/>If you'd like to demo, head over to Login where a sample login has been set up.
							</p>
					</header>
				</section>
				<hr/>
				<section className="App-about-steps col-6">
					<h2>First</h2>
					<p>Use the navigation bar to head to the login page</p>
					<h2 className="App-about-steps-text">Second</h2>
					<p>Use the example login credentials to log-on <br/> -or-<br/>
					Create your own account following the signup link</p>
				</section>
				<section className="App-about-steps col-6">
					<h2>Third</h2>
					<p>Choose your contnet by toggeling the subjects you want in your flashcard deck</p>
					{/* {subjects} */}
					<h2 className="App-about-steps-text">Lastly</h2>
					<p>Click on 'Start a session' at the bottom of the screen</p>
					{/* <Feedback /> */}
				</section>
			</main>
		)
	}
}