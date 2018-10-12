import React from "react";
import './cssComponents/home.css'

export class Home extends React.Component {
	render() {
		return (
			<main role="main" className="App-about row">
				<section className="App-about-intro col-12">
					<header className="homeHeader" role="heading">
						<h1 className="App-about-intro-header">Welcome to FlashQuiz</h1>
							<p>
							A simple Flashcard application where the user can combine subjects into a deck.
							If you'd like to demo, head over to Login where a sample login has been set up.
							</p>
					</header>
				</section>
				<hr/>
				<section className="App-about-steps col-6">
				<div class="instrucction-cards box-b">
						<h2 className="numbers">1</h2>
						<p className="instrucction-cards-text"><strong>Use the navigation bar to head to the login page</strong></p>
					</div>
					<div className="instrucction-cards box-a">
						<h2 className="numbers App-about-steps-text">2</h2>
						<p className="instrucction-cards-text"><strong>Use the example login credentials to log-on <br/> -or-<br/>
						Create your own account following the signup link</strong></p>
					</div>
				</section>
				<section className="App-about-steps col-6">
					<div className="instrucction-cards box-a">
						<h2 className="numbers">3</h2>
						<p className="instrucction-cards-text"><strong>Choose your content by toggling the subjects you want in your flashcard deck</strong></p>
					</div>
					<div className="instrucction-cards box-b">
						<h2 className=" numbers App-about-steps-text">4</h2>
						<p className="instrucction-cards-text"><strong>Click on 'Start a session' at the bottom of the screen</strong></p>
					</div>
				</section>
			</main>
		)
	}
}