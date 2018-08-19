import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { FlashQuiz } from './flashQuiz';

export class Profile extends React.Component {
	render() {
		const name="Foo";
		const score={HTML:"75%", CSS: "90%"}
		return (
			// in this section it would make more sence to put in the feedbackf
			<body>
				<main role="main">
					<section className="App-profile-welcom">
						<header role="banner">
							<h1>Welcome {name}</h1>
							<h2>Here's how you're doing so far</h2>
							<ul className="App-subjects">
							{/* this is going to be pulled in from props */}
							{/* ==============================BUILD NOTES================================ */}
							{/* TODO: this is going to be broken out into a component made up of math */}
							{/* NOTE: HTML IS THE WAY TO PULL IN THE DATA */}
							{/* ==============================BUILD NOTES================================ */}
								<li className="App-subject-toggle">HTML:{score.HTML}</li>
								<li className="App-subject-toggle">CSS: %50</li>
								<li className="App-subject-toggle">JS: 90%</li>
								<li className="App-subject-toggle">Jquery:Not Tested</li>
								<li className="App-subject-toggle">Node: Not tested</li>
								<li className="App-subject-toggle">Reac: 45%t</li>
							</ul>
						</header>
					</section>
					<section className="App-filter">
					{/* ==============================BUILD NOTES================================ */}
					{/* TODO: when out of small screen view make this snap to a sidebar */}
					{/* ==============================BUILD NOTES================================ */}
						<h3 className="App-filter-banner">Set up your study session</h3>
						<div class=" custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="customCheck1"/>
							<label class="custom-control-label" for="customCheck1">HTML</label>
							<input type="checkbox" class="custom-control-input" id="customCheck1"/>
							<label class="custom-control-label" for="customCheck1">CSS</label>
							<input type="checkbox" class="custom-control-input" id="customCheck1"/>
							<label class="custom-control-label" for="customCheck1">JS</label>
							<input type="checkbox" class="custom-control-input" id="customCheck1"/>
							<label class="custom-control-label" for="customCheck1">NODE</label>
							<input type="checkbox" class="custom-control-input" id="customCheck1"/>
							<label class="custom-control-label" for="customCheck1">React</label>
						</div>
						<h3 className="App-filter-presentation">Chose your presentation</h3>
						<div class="custom-control custom-radio custom-control-inline">
							<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
							<label class="custom-control-label" for="customRadioInline1">Flashcards</label>
						</div>
						<div class="custom-control custom-radio custom-control-inline">
							<input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
							<label class="custom-control-label" for="customRadioInline2">Quiz</label>
						</div>
						{/* ==============================BUILD NOTES================================ */}
						{/* TODO: buttons need to be hooked up to a route */}
						{/* ==============================BUILD NOTES================================ */}
						<div className="build-quiz-btn">
							<button><Link className="Nav-link" to="/components/flashQuiz">FlashQuiz</Link></button>
							
						</div>
					</section>
					<section>
						<button>Make a custom card</button>
					</section>
					<section>
						<button>Clear feedback</button>
					</section>

				</main>
			</body>
					
		)
	}
}