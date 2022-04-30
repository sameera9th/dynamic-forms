import { ActionType } from "../types"
import { AnyAction } from 'redux';
import { InitalState, Fields } from '../../interfaces/fields';

const initialState: InitalState = {
    fetching: false,
    data: [],
    error: '',
    fieldsJSON: {},
    JSONVisibility: false
};

const validateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

const validatePhoneNumber = (phone: string) => {
    const phoneno = /^\d{10}$/;
    if (phone.match(phoneno)) {
        return true
    }
    return false;
}


const formReducer = (state: InitalState = initialState, action: AnyAction): InitalState => {
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
                data: action.payload,
                fieldsJSON: action.payload.reduce((o: any, key: Fields) => ({
                    ...o, [key.type === 'hidden' ? key.type : key.label as string]: {
                        value: key.default ?? '',
                        isValid: key.default ? true : false
                    }
                }), {})
            }
        case ActionType.FORM + ActionType.ERROR:
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        case ActionType.HANDLE_EMAIL:
            return {
                ...state,
                fieldsJSON: {
                    ...state.fieldsJSON,
                    [action.payload.label]: {
                        value: action.payload.value,
                        isValid: validateEmail(action.payload.value)
                    }
                }
            }
        case ActionType.HANDLE_TELEPHONE:
            return {
                ...state,
                fieldsJSON: {
                    ...state.fieldsJSON,
                    [action.payload.label]: {
                        value: action.payload.value,
                        isValid: validatePhoneNumber(action.payload.value)
                    }
                }
            }
        case ActionType.HANDLE_RADIO:
            return {
                ...state,
                fieldsJSON: {
                    ...state.fieldsJSON,
                    [action.payload.label]: {
                        value: action.payload.value,
                        isValid: action.payload.value ? true : false
                    }
                }
            }
        case ActionType.HANDLE_SELECT:
            return {
                ...state,
                fieldsJSON: {
                    ...state.fieldsJSON,
                    [action.payload.label]: {
                        value: action.payload.value,
                        isValid: action.payload.value ? true : false
                    }
                }
            }
        case ActionType.HANDLE_JSON_VISIBILITY:
            return {
                ...state,
                JSONVisibility: action.payload
            }
        default:
            return state
    }
}

export default formReducer