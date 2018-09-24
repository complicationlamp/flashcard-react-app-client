import React from 'react';
import {shallow, mount} from 'enzyme';

import {FlashCard} from '../flashCard';

describe('<FlashCard>', () => {
	const questArray = [{
		"subject": "HTML",
    	"prompt": "Sunday",
		"correctAnswer": "Sunday",
    	"answers": [
        	"Sunday",
        	"Monday",
        	"Tuesday",
        	"Friday"
		],
	}]

	it('Renders without crashing', () => {
		shallow(<FlashCard/>);
	});
	// it('shouold have a flashcard when there are questions', () => {
	// 	const wrapper = shallow(<FlashCard/>);
	// 	wrapper.setState({questions: questArray}, () => {
	// 		const form = wrapper.find('form')
	// 		expect(form.length).toEqual(1)
	// 	})
	// });
	it('shouold not have a flashcard when there are not questions', () => {
		const wrapper = shallow(<FlashCard/>);
		const form = wrapper.find('form');
		expect(form.length).toEqual(0);
	});
})