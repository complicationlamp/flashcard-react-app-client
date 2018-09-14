import React from 'react';
import {shallow, mount} from 'enzyme';

import {FlashCard} from '../components/flashCard';

describe('<FlashCard>', () => {
	it('Renders without crashing', () => {
		shallow(<FlashCard/>);
	})
})