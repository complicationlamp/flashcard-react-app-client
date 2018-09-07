import React from 'react';

export class Feedback extends React.Component {
	//
	// constructor(props) {
	// 	super(props)
	// }
	render() {
		//
		const score=['HTML:75%', 'CSS: 90%', 'JS: 50%', 'NODE: 90%', 'REACT: 60%'].map((subject, value) => (
		<ul className="App-subjects">
			<li className="App-subject-toggle">{subject}</li>
		</ul>
		))
		//
		return (
			<div className="feedback-li">
				{score}
			</div>
		)
	}
}