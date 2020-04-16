import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import urlReducers from "./urlReducers";


export default combineReducers({
    form: formReducer,
    resultUrl: urlReducers,
});