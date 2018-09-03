import React from "react";
import {Link} from 'react-router-dom';
import {Feedback} from './feedback'
import {Filter} from './flashQuizFilter'

export class Profile extends React.Component {
	render() {
		const name="Foo";
		return (
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
						<Link className="Nav-link" to="/makeFlashcard">MakeFlashcard</Link>
					</section>
					<section>
						<Link className="Nav-link" to="/deleteProfile">Delete Profile</Link>
					</section>
				</main>
		)
	}
}