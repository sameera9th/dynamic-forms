import { Dispatch } from 'redux';
import FormFieldService from '../../services/live/form-fields';
import { ActionType } from '../types';
import { IHandleFormFields } from '../../interfaces/fields';

const {
    ERROR,
    FETCHING,
    FORM,
    SUCCESS
} = ActionType;

export const fetchFormFields = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: FORM + FETCHING });
        const { data } = await FormFieldService.getFormFields();
        dispatch({ type: FORM + SUCCESS, payload: data });
    } catch (error: any) {
        dispatch({ type: FORM + ERROR, error: error?.message || 'An error occurred while fetching the data' });
    }
};

export const hanldeFormFields = ({
    type,
    label,
    value
}: IHandleFormFields) => (dispatch: Dispatch) => {
    dispatch({
        type, payload: {
            label,
            value
        }
    });
}

export const handleJSONVisibility = (visibility: boolean) => (dispatch: Dispatch) => {
    dispatch({
        type: ActionType.HANDLE_JSON_VISIBILITY, 
        payload: visibility
    });
}