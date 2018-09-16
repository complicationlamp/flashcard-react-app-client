import reducer from '../profile';
import {setSubjectFilter} from '../../actions/profile'

describe('profile/subject reducer', () => {

	it('Should return an empty state wehn nothin is passed in', () => {
		let currentState ={};
		const state = reducer(currentState, {type: '__UNKNOWN'});
		expect(state).toBe(currentState);
	});

	it('Should set subjects in state', () => {
		let state;
		state = reducer(state, setSubjectFilter(["Javascript", "React"]));
		expect(state).toEqual({
			subjects: ["Javascript", "React"]
		});
	})
})