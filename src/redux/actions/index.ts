import { Fields } from '../../interfaces/fields';

interface FormFetchingAction {
    type: 'FORM_FETCHING',
    payload: null,
    error: string
}

interface FormSuccessAction {
    type: 'FORM_SUCCESS',
    payload: Fields[],
    error: string
}

interface FormErrorAction {
    type: 'FORM_ERROR',
    payload: Fields[],
    error: string
}

export type Action = FormFetchingAction | FormSuccessAction | FormErrorAction;