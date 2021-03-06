import React from 'react';
import {shallow, mount} from 'enzyme';
import {DeleteProfile} from '../deleteProfile';

describe('<DeleteProfile>', () => {
	it('Renders without crashing', () => {
		shallow(<DeleteProfile/>);
	});
	it('it has checkbox', () => {
		const wrapper = shallow(<DeleteProfile />);
		const checkbox = wrapper.find('input[type="checkbox"]');
		expect(checkbox.length).toEqual(1)
	});
	it('delet btn disabled when box not checked', () => {
		const wrapper = shallow(<DeleteProfile />);
		const checkbox = wrapper.find('input[type="checkbox"]');
		const btn = wrapper.find('button');
		expect(btn.props().disabled).toEqual(true);
	});

	it('updates confirmDelete when onChangeDeleteProfileCheckBox is called', () =>{
		const wrapper = shallow(<DeleteProfile />);
		expect(wrapper.state()).toEqual({confirmDelete: false})
		wrapper.instance().onChangeDeleteProfileCheckBox();
		expect(wrapper.state()).toEqual({confirmDelete: true})
	})
})