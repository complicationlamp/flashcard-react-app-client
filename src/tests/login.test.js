import React from 'react';
import {shallow, mount} from 'enzyme';

import {Login} from '../components/login';

describe('<Login>', () => {
	it('Renders without crashing', () => {
		shallow(<Login/>);
	})
})