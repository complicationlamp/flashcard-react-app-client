import React from 'react';
import {shallow, mount} from 'enzyme';

import {DeleteProfile} from '../components/deleteProfile';

describe('<DeleteProfile>', () => {
	it('Renders without crashing', () => {
		shallow(<DeleteProfile/>);
	})
})