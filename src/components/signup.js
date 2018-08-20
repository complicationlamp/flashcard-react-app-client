import React from "react";

export class Signup extends React.Component {
	render() {
		// ========================BUILD NOTES=========================
		// TODO: needs to be hooked up
		// ========================BUILD NOTES=========================
		function handleClick(e) {
			e.preventDefault();
			console.log('signUp was clicked');
		}
		return (
			<section className="App-signUp">
			<h1 role="banner">Signup</h1>
			<form className='signup-form'>
				<div>
				  <label for="first-name">First name</label>
				  <input placeholder='First Name' type="text" name='first-name' id='first-name' />
				</div>
				<div>
				  <label for="last-name">Last name</label>
				  <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
				</div>
				<div>
				  <label for="username">Email</label>
				  <input type="text" name='username' id='username' />
				</div>
				<div>
				  <label for="password">Password</label>
				  <input type="password" name='password' id='password' />
				</div>
				<div>
				  <label for="password">Retype Password</label>
				  <input type="password" name='password' id='password' />
				</div>
				<button type='submit' onClick={handleClick}>Sign Up</button>
			</form>
		  </section>
		)
	}
}