import React from "react";

export class Profile extends React.Component {
	render() {
		return (
			// in this section it would make more sence to put in the feedbackf
			<body>
				<main role="main">
					<section className="App-profile-welcom">
						<header role="banner">
							<h1>Welcome [name]</h1>
							<h2>Here's how you're doing so far</h2>
							<ul className="App-subjects">
								<li className="App-subject-toggle">HTML: %75</li>
								<li className="App-subject-toggle">CSS: %50</li>
								<li className="App-subject-toggle">JS: 90%</li>
								<li className="App-subject-toggle">Jquery:Not Tested</li>
								<li className="App-subject-toggle">Node: Not tested</li>
								<li className="App-subject-toggle">Reac: 45%t</li>
							</ul>
						</header>
					</section>
					<section className="App-filter">
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
						<div className="build-quiz-btn">
							<button>Start</button>
						</div>
					</section>
					<section>
						<button>Make a custom card</button>
					</section>
					<section>
						<button>Clear feedback</button>
					</section>

				</main>
				<footer role="content-info">Footer</footer>
			</body>
					
		)
	}
}