import React from 'react';
import {shallow, mount} from 'enzyme';
import {FlashQuiz} from '../flashQuiz';

describe('<FlashQuiz>', () => {
	it('Renders without crashing', () => {
		shallow(<FlashQuiz />);
	});
	it('Renders the FlashCard component', () => {
		const wrapper = shallow(<FlashQuiz />);
		expect(wrapper.hasClass("app-flashQuiz")).toEqual(true);
	});
	it('renders a FlashCard  components', () => {
		const wrapper = shallow(<FlashQuiz />);
		expect(wrapper.find("main")).toHaveLength(1);
	  });
})