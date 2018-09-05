import {
	SET_SUBJECT_FILTER
} from '../actions/profile';

const initialState = {
	subjects: []
}

export default function reducer(state = initialState, action) {
	if (action.type === SET_SUBJECT_FILTER) {
		debugger;
		return Object.assign({}, state, {
			subjects: action.subjects
		});
	}
	return state;
}