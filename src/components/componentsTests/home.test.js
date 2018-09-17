import React from 'react';
import {shallow, mount} from 'enzyme';

import {Home} from '../home';

describe('<Home>', () => {
	it('Renders without crashing', () => {
		shallow(<Home/>);
	})

	it('Renders the steps', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.hasClass("App-about")).toEqual(true);
	});
})