import {
    REQUEST_URL_EDIT,
    RESPONSE_URL_EDIT_ERROR,
    RESPONSE_URL_EDIT_SUCCESS
} from "../constants/actionTypes";

export default (state = {editedUrl: {}}, action) => {
    switch(action.type) {
        case REQUEST_URL_EDIT:
            return { ...state, editedUrl: {} };
        case RESPONSE_URL_EDIT_SUCCESS:
            return { ...state, editedUrl: action.payload };
        case RESPONSE_URL_EDIT_ERROR:
            return {...state, editedUrl: {error: "Cannot find url to edit"}};
        default:
            return {...state};
    }
}