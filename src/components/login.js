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
		console.log(e.target.username.value);
		this.props.dispatch(login(username, password));
	}
	render() {
			
		return (
			<main role="main">
				<section className="App-signUp">
					<h1 role="banner">Login</h1>
					<form onSubmit={this.handleSubmit} className='signup-form'>
						<div>
							<label for="username">Username</label>
							<input type="text" name='username' id='username' />
						</div>
						<div>
							<label for="password">Password</label>
							<input type="password" name='password' id='password' />
						</div>
						<button type='submit'>Login</button>
					</form>
				</section>
		  </main>
		)
	}
}
export default connect()(Login)