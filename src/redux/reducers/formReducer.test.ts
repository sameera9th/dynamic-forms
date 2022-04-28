import { ActionType } from '../types/index';
import formReducer from './formReducer';
import { fields } from "../../__mock__/fieldResponse";

describe('form reducer', () => {
    const getInitialState = () => ({
        fetching: false,
        data: [],
        error: ''
    });

    describe('FORM_FETCHING', () => {
        it('fetching should be true', () => {
            const basketData = getInitialState();
            const state = formReducer(basketData, {
                type: ActionType.FORM + ActionType.FETCHING,
                payload: null,
            });
            expect(state).toEqual({
                ...basketData,
                fetching: true,
            });
        });
    });

    describe('FORM_SUCCESS', () => {
        it('data should be have values and fetching should be false', () => {
            const basketData = getInitialState();
            const state = formReducer(basketData, {
                type: ActionType.FORM + ActionType.SUCCESS,
                payload: fields,
            });
            expect(state).toEqual({
                ...basketData,
                data: fields,
                fetching: false
            });
        });
    });

    describe('FORM_ERROR', () => {
        it('error should have a value and fetching should be false', () => {
            const basketData = getInitialState();
            const errorMsg = 'An error occurred while fetching the fields';
            const state = formReducer(basketData, {
                type: ActionType.FORM + ActionType.ERROR,
                error: errorMsg,
            });
            expect(state).toEqual({
                ...basketData,
                error: errorMsg,
                fetching: false
            });
        });
    });
});
