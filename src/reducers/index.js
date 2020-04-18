import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import urlReducers from "./urlReducers";
import typeSelectorReducers from "./typeSelectorReducers";
import editReducers from "./editReducers";
import deleteReducers from "./deleteReducers";
import editDeleteSelectReducers from "./editDeleteSelectReducers";


export default combineReducers({
    form: formReducer,
    resultUrl: urlReducers,
    urlType: typeSelectorReducers,
    editedUrl: editReducers,
    deleteUrl: deleteReducers,
    isEdit: editDeleteSelectReducers
});