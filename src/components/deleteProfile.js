import React from 'react';
import { API_BASE_URL } from '../config';
import {connect} from 'react-redux';

import './cssComponents/deleteProfile.css'

export class DeleteProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			confirmDelete: false
		}

		this.loadId = this.loadId.bind(this);
		this.onChangeDeleteProfileCheckBox = this.onChangeDeleteProfileCheckBox.bind(this);
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
	onChangeDeleteProfileCheckBox(){
		this.setState({
			confirmDelete: !this.state.confirmDelete
		})
	}

	render() {
		// const feedbackProfileDetails = ['Username', 'Password', 'Re-enter Password'].map((detail, index) => (
		// 	<div key={`${detail}-${index}`}>
		// 		<label htmlfor={`${detail}-${index}`}>{detail}</label><br/>
		// 		<input type="text" id={`${detail}-${index}`} />
		// 	</div>
		// ))

		return(
			<div className="App-deleteProfile row">
				<section className="App-deleteMe">
					<h2> Delete Account</h2>
					<div className="custom-control custom-checkbox">
						<p className="subtext">Check this box to delete</p>
							<input onChange={this.onChangeDeleteProfileCheckBox} type="checkbox" className="custom-control-input" id="customCheck1" value={this.state.confirmDelete}/>
							<label className="custom-control-label" htmlFor="customCheck1"></label>
						</div>
						<button onClick={this.loadId} disabled={!this.state.confirmDelete} type='submit' className="deleteBtn">Delete account</button>
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