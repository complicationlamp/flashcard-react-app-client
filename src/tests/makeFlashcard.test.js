import React from 'react';
import {shallow, mount} from 'enzyme';

import {MakeFlashcard} from '../components/makeFlashcard';

describe('<MakeFlashcard>', () => {
	it('Renders without crashing', () => {
		shallow(<MakeFlashcard/>);
	})
})