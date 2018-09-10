import React from "react";
import {connect} from "react-redux";
import {login} from "../actions/auth";

export class Login extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleSubmit(e){
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;
		this.props.dispatch(login(username, password))
		.then(() => { 
			window.location.replace('/profile')
			// we weren't getting here before because redux-form expects us to
			// use "this.props.handleSubmit"
			console.log('successful login!')
		})
		.catch((error) => {
			console.log(error)
		})
	}
	render() {
		return (
			<main role="main">
				<section className="App-signUp">
					<h1 role="banner">Login</h1>
					{this.props.error ? <div>Invalid Credentials</div> : null}
					<form onSubmit={this.handleSubmit} className='signup-form'>
						<div>
							<label htmlFor="username">Username</label>
							<input type="text" name='username' id='username' />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input type="password" name='password' id='password' />
						</div>
						<button type='submit'>Login</button>
					</form>
				</section>
		  </main>
		)
	}
}

const mapStateToProps = state => ({
    error: state.auth.error
});

export default connect(mapStateToProps)(Login)