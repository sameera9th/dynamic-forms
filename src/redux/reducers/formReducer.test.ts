import { ActionType } from '../types/index';
import formReducer from './formReducer';
import { fields, fieldsJSON } from "../../__mock__/fieldResponse";

describe('form reducer', () => {
    const getInitialState = () => ({
        fetching: false,
        data: [],
        error: '',
        fieldsJSON: {},
        JSONVisibility: false
    });

    describe('FORM_FETCHING', () => {
        it('fetching should be true', () => {
            const formData = getInitialState();
            const state = formReducer(formData, {
                type: ActionType.FORM + ActionType.FETCHING,
                payload: null,
            });
            expect(state).toEqual({
                ...formData,
                fetching: true,
            });
        });
    });

    describe('FORM_SUCCESS', () => {
        it('data should be have values and fetching should be false', () => {
            const formData = getInitialState();
            const state = formReducer(formData, {
                type: ActionType.FORM + ActionType.SUCCESS,
                payload: fields,
            });
            expect(state).toEqual({
                ...formData,
                data: fields,
                fieldsJSON: fieldsJSON,
                fetching: false
            });
        });
    });

    describe('FORM_ERROR', () => {
        it('error should have a value and fetching should be false', () => {
            const formData = getInitialState();
            const errorMsg = 'An error occurred while fetching the fields';
            const state = formReducer(formData, {
                type: ActionType.FORM + ActionType.ERROR,
                error: errorMsg,
            });
            expect(state).toEqual({
                ...formData,
                error: errorMsg,
                fetching: false
            });
        });
    });
    describe('HANDLE_TELEPHONE', () => {
        it('HANDLE_TELEPHONE should update the state with Contact number values', () => {
            const getState = () => ({
                fetching: false,
                data: fields,
                error: '',
                fieldsJSON: fieldsJSON,
                JSONVisibility: false
            });
            const formData = getState();
            const state = formReducer(formData, {
                type: ActionType.HANDLE_TELEPHONE,
                payload: {
                    label: 'Contact number',
                    value: '01222121'
                },
            });
            expect(state).toEqual({
                ...formData,
                fieldsJSON: {
                    ...fieldsJSON,
                    'Contact number': {
                        isValid: false,
                        value: '01222121'
                    }
                }
            });
        });

        it('isValid should be false if the Contact number is invalid', () => {
            const getState = () => ({
                fetching: false,
                data: fields,
                error: '',
                fieldsJSON: fieldsJSON,
                JSONVisibility: false
            });
            const formData = getState();
            const state = formReducer(formData, {
                type: ActionType.HANDLE_TELEPHONE,
                payload: {
                    label: 'Contact number',
                    value: 'xxxxx'
                },
            });
            expect(state).toEqual({
                ...formData,
                fieldsJSON: {
                    ...fieldsJSON,
                    'Contact number': {
                        isValid: false,
                        value: 'xxxxx'
                    }
                }
            });
        });

        it('isValid should be true if the Contact number is valid', () => {
            const getState = () => ({
                fetching: false,
                data: fields,
                error: '',
                fieldsJSON: fieldsJSON,
                JSONVisibility: false
            });
            const formData = getState();
            const state = formReducer(formData, {
                type: ActionType.HANDLE_TELEPHONE,
                payload: {
                    label: 'Contact number',
                    value: '0776655547'
                },
            });
            expect(state).toEqual({
                ...formData,
                fieldsJSON: {
                    ...fieldsJSON,
                    'Contact number': {
                        isValid: true,
                        value: '0776655547'
                    }
                }
            });
        });
    });

    describe('HANDLE_EMAIL', () => {
        it('HANDLE_EMAIL should update the state with Email address values', () => {
            const getState = () => ({
                fetching: false,
                data: fields,
                error: '',
                fieldsJSON: fieldsJSON,
                JSONVisibility: false
            });
            const formData = getState();
            const state = formReducer(formData, {
                type: ActionType.HANDLE_EMAIL,
                payload: {
                    label: 'Email address',
                    value: 'sameera.la'
                },
            });
            expect(state).toEqual({
                ...formData,
                fieldsJSON: {
                    ...fieldsJSON,
                    'Email address': {
                        isValid: false,
                        value: 'sameera.la'
                    }
                }
            });
        });

        it('isValid should be false if the Email address is invalid', () => {
            const getState = () => ({
                fetching: false,
                data: fields,
                error: '',
                fieldsJSON: fieldsJSON,
                JSONVisibility: false
            });
            const formData = getState();
            const state = formReducer(formData, {
                type: ActionType.HANDLE_EMAIL,
                payload: {
                    label: 'Email address',
                    value: 'asasa'
                },
            });
            expect(state).toEqual({
                ...formData,
                fieldsJSON: {
                    ...fieldsJSON,
                    'Email address': {
                        isValid: false,
                        value: 'asasa'
                    }
                }
            });
        });

        it('isValid should be true if the Email address is valid', () => {
            const getState = () => ({
                fetching: false,
                data: fields,
                error: '',
                fieldsJSON: fieldsJSON,
                JSONVisibility: false
            });
            const formData = getState();
            const state = formReducer(formData, {
                type: ActionType.HANDLE_EMAIL,
                payload: {
                    label: 'Email address',
                    value: 'sameera@grr.la'
                },
            });
            expect(state).toEqual({
                ...formData,
                fieldsJSON: {
                    ...fieldsJSON,
                    'Email address': {
                        isValid: true,
                        value: 'sameera@grr.la'
                    }
                }
            });
        });
    });

    describe('HANDLE_RADIO', () => {
        it('HANDLE_RADIO should update the state with Gender values', () => {
            const getState = () => ({
                fetching: false,
                data: fields,
                error: '',
                fieldsJSON: fieldsJSON,
                JSONVisibility: false
            });
            const formData = getState();
            const state = formReducer(formData, {
                type: ActionType.HANDLE_RADIO,
                payload: {
                    label: 'Gender',
                    value: 'M (Male)'
                },
            });
            expect(state).toEqual({
                ...formData,
                fieldsJSON: {
                    ...fieldsJSON,
                    'Gender': {
                        isValid: true,
                        value: 'M (Male)'
                    }
                }
            });
        });
    });

    describe('HANDLE_SELECT', () => {
        it('HANDLE_SELECT should update the state with State values', () => {
            const getState = () => ({
                fetching: false,
                data: fields,
                error: '',
                fieldsJSON: fieldsJSON,
                JSONVisibility: false
            });
            const formData = getState();
            const state = formReducer(formData, {
                type: ActionType.HANDLE_SELECT,
                payload: {
                    label: 'State',
                    value: 'ACT'
                },
            });
            expect(state).toEqual({
                ...formData,
                fieldsJSON: {
                    ...fieldsJSON,
                    'State': {
                        isValid: true,
                        value: 'ACT'
                    }
                }
            });
        });
    });
});
