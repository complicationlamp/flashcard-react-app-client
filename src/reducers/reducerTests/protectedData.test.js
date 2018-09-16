import reducer from '../protected-data';
import { fetchProtectedDataSuccess, fetchProtectedDataError} from '../../actions/protected-data';

describe('protectted-data reducer', () =>{
	it('Should return an empty state wehn nothin is passed in', () => {
		let currentState ={};
		const state = reducer(currentState, {type: '__UNKNOWN'});
		expect(state).toBe(currentState);
	});

	it('Should return data', () => {
		let state;
		state = reducer(state, fetchProtectedDataSuccess('1010101111'));
		expect(state.data).toEqual('1010101111');
	})

	it('Should Error', () => {
		let state;
		state = reducer(state, fetchProtectedDataError('Danger!'));
		expect(state.error).toEqual('Danger!');
	})
})