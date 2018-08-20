import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { FlashQuiz } from './flashQuiz';
import {Feedback} from './feedback'
import {Filter} from './flashQuizFilter'

export class Profile extends React.Component {
	render() {
		const name="Foo";
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
					<Link className="Nav-link" to="/components/makeFlashcard"><button>MakeFlashcard</button></Link>
					</section>
					<section>
						<button>Clear feedback</button>
					</section>

				</main>
			</body>
					
		)
	}
}