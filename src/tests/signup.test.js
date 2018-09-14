import React from 'react';
import {shallow, mount} from 'enzyme';

import Signup from '../components/signup';

describe('<Signup>', () => {
	it('Renders without crashing', () => {
		shallow(<Signup/>);
	})
})