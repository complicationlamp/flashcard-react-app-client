import {SET_SUBJECT_FILTER, setSubjectFilter} from '../profile'

describe('setSubjectFilter', () => {
    it('Should return the action', () => {
        const subjects = 'Subject';
        const action = setSubjectFilter(subjects);
        expect(action.type).toEqual(SET_SUBJECT_FILTER);
        expect(action.subjects).toEqual(subjects);
    });
});