import React from "react";

export class Login extends React.Component {
	render() {
		function handleClick(e) {
			e.preventDefault();
			console.log('login was clicked');
		}
		console.log(this.props)
		return (
			<main role="main">
				<section className="App-signUp">
					<h1 role="banner">Login</h1>
					<form className='signup-form'>
						<div>
							<label for="username">Email</label>
							<input type="text" name='username' id='username' />
						</div>
						<div>
							<label for="password">Password</label>
							<input type="password" name='password' id='password' />
						</div>
						<button type='submit' onClick={handleClick}>Login</button>
					</form>
				</section>
		  </main>
		)
	}
}