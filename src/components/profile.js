import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Feedback} from './feedback'

import './cssComponents/profile.css'
export class Profile extends React.Component {
	render() {
		return (
				<main role="main">
					<section className="App-profile-welcome">
						<header role="banner">
							<h1>Welcome {this.props.userFirstName}</h1>
							<h2>Here's how you're doing so far</h2>
							<Feedback/>
						</header>
					</section>
					<section className="links-section col-12">
						<Link className="linkFromProfile row" to="/flashQuiz">Start a session</Link>
						<Link className="linkFromProfile row" to="/deleteProfile">Delete Profile</Link>
						<Link className="linkFromProfile row" to="/makeFlashcard">Make Flashcard</Link>
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