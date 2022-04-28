import { combineReducers } from "redux";
import formReducer from "./formReducer";
import { InitalState } from '../../interfaces/fields';

export interface ReduxStateTypes {
    formFields: InitalState
}

const reducers = combineReducers({
    formFields: formReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>