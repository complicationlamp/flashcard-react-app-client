import React from 'react';

export class Feedback extends React.Component {
	render() {
		const name="Foo";
		const score={HTML:"75%", CSS: "90%"}
		return (
			<ul className="App-subjects">
			{/* this is going to be pulled in from props */}
			{/* ==============================BUILD NOTES================================ */}
			{/* TODO: this is going to be broken out into a component made up of math */}
			{/* NOTE: HTML IS THE WAY TO PULL IN THE DATA */}
			{/* ==============================BUILD NOTES================================ */}
				<li className="App-subject-toggle">HTML:{score.HTML}</li>
				<li className="App-subject-toggle">CSS: %50</li>
				<li className="App-subject-toggle">JS: 90%</li>
				<li className="App-subject-toggle">Jquery:Not Tested</li>
				<li className="App-subject-toggle">Node: Not tested</li>
				<li className="App-subject-toggle">Reac: 45%t</li>
			</ul>
		)
	}
}