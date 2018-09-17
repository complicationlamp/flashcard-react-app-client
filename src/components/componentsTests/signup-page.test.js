import React from 'react';
import {shallow, mount} from 'enzyme';

import {SignupPage} from '../signup-page';

describe('<SignupPage>', () => {
	it('Renders without crashing', () => {
		shallow(<SignupPage/>);
	})
})