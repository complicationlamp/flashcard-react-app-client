import React from 'react';
import {shallow, mount} from 'enzyme';
import FlashCard from '../components/flashCard';
import {FlashQuiz} from '../components/flashQuiz';

describe('<FlashQuiz>', () => {
	it('Renders without crashing', () => {
		shallow(<FlashQuiz />);
	});

	// it('Renders the FlashCard component', () => {
	// 	const wrapper = shallow(<FlashQuiz />);
	// 	expect(wrapper.hasClass("noteCard")).toEqual(true);
	// });
	// it('renders a FlashCard  components', () => {
	// 	const wrapper = shallow(<FlashQuiz />);
	// 	expect(wrapper.find("main")).toHaveLength(1);
	//   });

	//   it('renders children when passed in', () => {
	// 	const wrapper = shallow(
	// 		<FlashQuiz/>
	// 	);
	// 	expect(true).toEqual(true);
	//   });
})