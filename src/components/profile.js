import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Feedback} from './feedback'

export class Profile extends React.Component {
	render() {
		return (
				<main role="main">
					<section className="App-profile-welcom">
						<header role="banner">
							<h1>Welcome {this.props.userFirstName}</h1>
							<h2>Here's how you're doing so far</h2>
							<Feedback/>
						</header>
					</section>
					<section className="App-filter">
						<Link className="Nav-link" to="/flashQuiz">Start a session</Link>
					</section>
					<section>
						<Link className="Nav-link" to="/makeFlashcard">Make Flashcard</Link>
					</section>
					<section>
						<Link className="Nav-link" to="/deleteProfile">Delete Profile</Link>
					</section>
				</main>
		)
	}
}

const mapStateToProps = (state) => {
	return {
    	userFirstName: (state.auth.currentUser && state.auth.currentUser.firstName) || null
	}
};

export default connect(mapStateToProps)(Profile)