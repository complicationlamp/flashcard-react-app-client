import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {MakeFlashcard} from './makeFlashcard'
import './cssComponents/profile.css'

export class Profile extends React.Component {
	render() {
		return (
			<main role="main" className="row">
				<section className="App-profile-welcome col-12">
					<header role="banner">
						<h1>Welcome {this.props.userFirstName}</h1>
					</header>
				</section>
				<section className="links-section">
					<Link className="linkFromProfile col-12" to="/flashQuiz">Start a session</Link>
				</section>
				<section className="makeFC-profile col-12">
					<MakeFlashcard userId={this.props.userId}/>
				</section>
				<section className="profileDelete">
					<br/>
					<Link className="linkFromProfile col-12" to="/deleteProfile">Delete Profile</Link>
				</section>
			</main>
		)
	}
}

const mapStateToProps = (state) => {
	return {
    	userFirstName: (state.auth.currentUser && state.auth.currentUser.firstName) || null,
		userId: (state.auth.currentUser && state.auth.currentUser.id) || null
	}
};

export default connect(mapStateToProps)(Profile)