import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Filter extends React.Component {
	render() {
		return (
			<section>
			{/* // ==============================BUILD NOTES================================ */}
			 {/* TODO: when out of small screen view make this snap to a sidebar */}
			 {/* ==============================BUILD NOTES================================ */}
				<h3 className="App-filter-banner">Set up your study session</h3>
				<div className="custom-checkbox">
					<input type="checkbox" class="custom-control-input" id="customCheck1"/>
					<label class="custom-control-label" for="customCheck1">HTML</label>
					<input type="checkbox" class="custom-control-input" id="customCheck1"/>
					<label class="custom-control-label" for="customCheck1">CSS</label>
					<input type="checkbox" class="custom-control-input" id="customCheck1"/>
					<label class="custom-control-label" for="customCheck1">JS</label>
					<input type="checkbox" class="custom-control-input" id="customCheck1"/>
					<label class="custom-control-label" for="customCheck1">NODE</label>
					<input type="checkbox" class="custom-control-input" id="customCheck1"/>
					<label class="custom-control-label" for="customCheck1">React</label>
				</div>
				<h3 className="App-filter-presentation">Chose your presentation</h3>
				<div class="custom-control custom-radio custom-control-inline">
					<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadioInline1">Flashcards</label>
				</div>
				<div class="custom-control custom-radio custom-control-inline">
					<input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
					<label class="custom-control-label" for="customRadioInline2">Quiz</label>
				</div>
				 {/* ==============================BUILD NOTES================================ */}
				 {/* TODO: buttons need to be hooked up to a route */}
				 {/* ==============================BUILD NOTES================================ */}
				 <Link className="Nav-link" to="/components/flashQuiz"><button>Start Your Study Session</button></Link>
			</section>
		)
	}
}