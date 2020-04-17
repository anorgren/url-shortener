import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import urlReducers from "./urlReducers";
import typeSelectorReducers from "./typeSelectorReducers";


export default combineReducers({
    form: formReducer,
    resultUrl: urlReducers,
    urlType: typeSelectorReducers,
});