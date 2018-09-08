import React from 'react';

export class Feedback extends React.Component {
	render() {
		const score=['HTML:75%', 'CSS: 90%', 'JS: 50%', 'Jquery: 85%', 'NODE: 90%', 'REACT: 60%'].map((subject) => (
		<ul className="App-subjects">
			<li className="App-subject-toggle">{subject}</li>
		</ul>
		));

		return (
			<div className="feedback-li">
				{score}
			</div>
		)
	}
}