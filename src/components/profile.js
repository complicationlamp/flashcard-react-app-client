import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { FlashQuiz } from './flashQuiz';
import {Feedback} from './feedback'
import {Filter} from './flashQuizFilter'

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
							<Feedback/>
						</header>
					</section>
					<section className="App-filter">
						<Filter/>
					</section>
					<section>
						<button><Link className="Nav-link" to="/components/makeFlashcard">MakeFlashcard</Link></button>
					</section>
					<section>
						<button>Clear feedback</button>
					</section>

				</main>
			</body>
					
		)
	}
}