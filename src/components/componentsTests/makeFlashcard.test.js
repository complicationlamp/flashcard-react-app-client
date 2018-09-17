import React from 'react';
import {shallow, mount} from 'enzyme';

import {MakeFlashcard} from '../makeFlashcard';

describe('<MakeFlashcard>', () => {
	it('Renders without crashing', () => {
		shallow(<MakeFlashcard/>);
	})
})