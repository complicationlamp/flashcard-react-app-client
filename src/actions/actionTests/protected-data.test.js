import {
	FETCH_PROTECTED_DATA_SUCCESS,
	fetchProtectedDataSuccess,
	FETCH_PROTECTED_DATA_ERROR,
	fetchProtectedDataError
} from '../protected-data'

describe("fetch protected data", () => {
	it('Should return the action', () => {
		const data = 'Data, 1010101011110';
		const action = fetchProtectedDataSuccess(data);
		expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
		expect(action.data).toEqual(data);
	});
});

describe("fetch protected data error", () => {
	it('Should return the action', () => {
		const error = "ERRRRR error";
		const action = fetchProtectedDataError(error);
		expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
		expect(action.error).toEqual(error);
	});
});

