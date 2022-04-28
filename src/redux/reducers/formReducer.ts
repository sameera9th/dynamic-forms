import { ActionType } from "../types"
import { AnyAction } from 'redux';
import { InitalState } from '../../interfaces/fields';

const initialState: InitalState = {
    fetching: false,
    data: [],
    error: ''
};

const reducer = (state: InitalState = initialState, action: AnyAction): InitalState => {
    switch (action.type) {
        case ActionType.FORM + ActionType.FETCHING:
            return {
                ...state,
                fetching: true
            }
        case ActionType.FORM + ActionType.SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.payload
            }
        case ActionType.FORM + ActionType.ERROR:
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer