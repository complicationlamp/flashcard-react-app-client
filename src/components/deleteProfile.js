import React from 'react';
import { API_BASE_URL } from '../config';
import {connect} from 'react-redux';

import './cssComponents/deleteProfile.css'

export class DeleteProfile extends React.Component {
	constructor(props) {
		super(props)
		this.loadId = this.loadId.bind(this);
		this.onChangeDeletePofileCheckBox = this.onChangeDeletePofileCheckBox.bind(this);

		this.state ={
			confirmDelete: false
		}
	}
	loadId(){
		this.setState({
			error: null, 
			loadiung: true
		});
		return fetch(`${API_BASE_URL}/users/${this.props.userid}`, {
			method: 'DELETE'
		})
		.then(res => {
			if (!res.ok){
				return Promise.reject(res.statusText);
			}
			window.location.replace('/home');
		})
	}
	onChangeDeletePofileCheckBox(){
		this.setState({
			confirmDelete: !this.state.confirmDelete
		})
	}

	render() {
		const feedbackProfileDetails = ['Username', 'Password', 'Re-enter Password'].map((detail, index) => (
			<div>
				<label htmlfor={`${detail}-${index}`}>{detail}</label>
				<input type="text" id={`${detail}-${index}`} />
			</div>
		))

		return(
			<div className="App-deleteProfile">
				<section className="App-reset">
					<h2> Reset Account: cleares history of successfull and unsuccessful answers on your account</h2>
						{feedbackProfileDetails}
						<button type='submit'>Clear Feedback</button>
				</section>
				<section className="App-deleteMe">
					<h2> Delete Account</h2>
					<div class="custom-control custom-checkbox">
							<input onChange={this.onChangeDeletePofileCheckBox} type="checkbox" class="custom-control-input" id="customCheck1" value={this.state.confirmDelete}/>
							<label class="custom-control-label" for="customCheck1">Check this box to delete </label>
						</div>
						<button onClick={this.loadId} disabled={!this.state.confirmDelete} type='submit'>Delete account</button>
				</section>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
    	userid: (state.auth.currentUser && state.auth.currentUser.id) || null
	}
};

export default connect(mapStateToProps)(DeleteProfile)