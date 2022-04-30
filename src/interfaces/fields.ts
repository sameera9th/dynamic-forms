import { ActionType } from '../redux/types';
export interface Fields {
    label?: string,
    type: string,
    isOptional?: boolean,
    isHidden?: boolean,
    value?: string | string[] | number,
    default?: string
}

export interface IFieldsJSON {
    [key: string]: {
        value: string,
        isValid: boolean
    }
}

export interface InitalState {
    fetching: boolean,
    data: Fields[] | [],
    error: string,
    fieldsJSON: IFieldsJSON,
    JSONVisibility: boolean
}

export interface IHandleFormFields {
    type: ActionType.HANDLE_EMAIL | ActionType.HANDLE_TELEPHONE | ActionType.HANDLE_SELECT | ActionType.HANDLE_RADIO
    label: string,
    value: string
}