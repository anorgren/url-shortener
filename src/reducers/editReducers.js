import {
    REQUEST_URL_EDIT,
    RESPONSE_URL_EDIT_ERROR,
    RESPONSE_URL_EDIT_SUCCESS
} from "../constants/actionTypes";

export default (state, action) => {
    switch(action.type) {
        case REQUEST_URL_EDIT:
            return { ...state };
        case RESPONSE_URL_EDIT_SUCCESS:
            return { ...state, editedUrl: action.payload };
        case RESPONSE_URL_EDIT_ERROR:
            return {...state, editedUrl: "Provided url code does not exist."};
        default:
            return {...state};
    }
}