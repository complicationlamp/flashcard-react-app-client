import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            // Convert ValidationErrors into SubmissionErrors for Redux Form
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    });
};
