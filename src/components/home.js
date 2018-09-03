import React from "react";

export class Home extends React.Component {
	render() {
		return (
			<main role="main">
				<section className="App-about">
					<header role="banner">
						<h1>Flash till you crash</h1>
						<h2>Customizable flash cards to inform user areas of strength and weaknesses
						</h2>
					</header>
				</section>
				<section className="App-about-graphic">
					<h3 className="App-about-banner">Build a custom flashcard deck</h3>
					<h4 className="App-about-steps">First: Choose your contnet</h4>
					<ul className="App-subjects">
						<li className="App-subject-toggle">HTML</li>
						<li className="App-subject-toggle">CSS</li>
						<li className="App-subject-toggle">JS</li>
						<li className="App-subject-toggle">Jquery</li>
						<li className="App-subject-toggle">Node</li>
						<li className="App-subject-toggle">React</li>
					</ul>
					<h3 className="App-about-steps">Lastly: review the feedback to hone in on what you need to work on</h3>
					<ul className="App-subjects">
						<li className="App-subject-toggle">HTML: %75</li>
						<li className="App-subject-toggle">CSS: %50</li>
						<li className="App-subject-toggle">JS: 90%</li>
						<li className="App-subject-toggle">Jquery:Not Tested</li>
						<li className="App-subject-toggle">Node: Not tested</li>
						<li className="App-subject-toggle">React: 45%</li>
					</ul>
				</section>
			</main>
		)
	}
}