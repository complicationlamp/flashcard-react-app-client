import React from 'react';
import {shallow, mount} from 'enzyme';

import {FlashCard} from '../flashCard';

describe('<FlashCard>', () => {
	const questArray = [
		{"subject": "HTML",
    "prompt": "Sunday",
    "correctAnswer": "Sunday",
    "answers": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Friday"
	],}
]
	it('Renders without crashing', () => {
		shallow(<FlashCard/>);
	});
	it('shouold have a flashcard when there are questions', () => {
		const wrapper = shallow(<FlashCard/>);
		wrapper.setState({questions: questArray}, () => {
			const form = wrapper.find('form')
			expect(form.length).toEqual(1)
		})
	});
	it('shouold not have a flashcard when there are not questions', () => {
		const wrapper = shallow(<FlashCard/>);
		const form = wrapper.find('form');
		expect(form.length).toEqual(0);
	});
	// it('should flip to the back of the card', () => {
	// 	const wrapper = shallow(<FlashCard/>);
	// 	wrapper.setState({questions: questArray}, () => {
	// 		const form = wrapper.find('form');
	// 		const section = wrapper.find('section');
	// 		const style = section.get(0).style
	// 		expect(form.length).toEqual(1)
	// 		expect(section.length).toEqual(1)
	// 		expect(style).toHaveProperty("display", "none");
	// 		expect(form.hasClass('noteCard-front'))
	// 	})
	// })
})