import {
	SET_AUTH_TOKEN,
	setAuthToken,
	CLEAR_AUTH,
	clearAuth,
	AUTH_REQUEST,
	authRequest,
	AUTH_SUCCESS,
	authSuccess,
	AUTH_ERROR,
	authError
} from '../auth';

describe("set an auth token", () => {
	it('Should return the action', () => {
		const authToken = 'One ring...';
		const action = setAuthToken(authToken);
		expect(action.type).toEqual(SET_AUTH_TOKEN);
		expect(action.authToken).toEqual(authToken);
	});
});

describe("clear an auth token", () => {
	it('Should return the action', () => {
		const auth = 'One ring...';
		const action = clearAuth(auth);
		expect(action.type).toEqual(CLEAR_AUTH);
		expect(action.clearAuth).toEqual(undefined);
	});
});

describe("requests auth", () => {
	it('Should make the request', () => {
		const auth = 'One ring...';
		const action = authRequest();
		expect(action.type).toEqual(AUTH_REQUEST);
		expect(action.authRequest).toEqual(undefined);
	});
});

describe("Successful auth", () => {
	it('Should return with the curent user', () => {
		const currentUser = 'Germain Concord';
		const action = authSuccess(currentUser);
		expect(action.type).toEqual(AUTH_SUCCESS);
		expect(action.currentUser).toEqual(currentUser);
	});
});

describe("Auth Error", () => {
	it('Should return with an error', () => {
		const error = 'Brret did it';
		const action = authError(error);
		expect(action.type).toEqual(AUTH_ERROR);
		expect(action.error).toEqual(error);
	});
});