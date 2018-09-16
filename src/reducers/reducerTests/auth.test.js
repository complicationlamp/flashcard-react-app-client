import reducer from '../auth';
import {
	setAuthToken,
	clearAuth,
	authRequest,
	authSuccess,
	authError
} from '../../actions/auth'

describe('auth reducer', () => {

	it('Should return an empty state wehn nothin is passed in', () => {
		let currentState ={};
		const state = reducer(currentState, {type: '__UNKNOWN'});
		expect(state).toBe(currentState);
	});

	it('Should set an authtoken', () => {
		let state;
		state = reducer(state, setAuthToken("1, 2, 3"));
		expect(state.authToken).toEqual("1, 2, 3");
	});

	it('Should set current user', () => {
		let state = {authToken: "1, 2, 3", currentUser: "Steve"}
		state = reducer(state, clearAuth());
		expect(state.authToken).toEqual(null);
		expect(state.currentUser).toEqual(null);
	});

	it('Should make a request changing loading', () => {
		let state;
		state = reducer(state, authRequest());
		expect(state.loading).toEqual(true);
	});

	it('Should set the user after sucess', () => {
		let state;
		state = reducer(state, authSuccess("Steve"));
		expect(state.currentUser).toEqual("Steve")
	});

	it('Should error', () => {
		let state;
		state = reducer(state, authError("Alert Danger"));
		expect(state.error).toEqual("Alert Danger")
	})
});
