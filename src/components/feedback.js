import React from 'react';

export class Feedback extends React.Component {
	render() {
		const name="Foo";
		const score={HTML:"75%", CSS: "90%", JS: "93%", Jquery: "NA", Node:"NA", React:"72%"}
		return (
			<ul className="App-subjects">
			{/* this is going to be pulled in from props */}
			{/* ==============================BUILD NOTES================================ */}
			{/* TODO: this is going to be broken out into a component made up of math */}
			{/* NOTE: HTML IS THE WAY TO PULL IN THE DATA */}
			{/* ==============================BUILD NOTES================================ */}
				<li className="App-subject-toggle">HTML:{score.HTML}</li>
				<li className="App-subject-toggle">CSS: {score.CSS}</li>
				<li className="App-subject-toggle">JS: {score.JS}</li>
				<li className="App-subject-toggle">Jquery:{score.Jquery}</li>
				<li className="App-subject-toggle">Node: {score.Node}</li>
				<li className="App-subject-toggle">React: {score.React}</li>
			</ul>
		)
	}
}