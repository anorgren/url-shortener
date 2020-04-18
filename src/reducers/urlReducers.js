import {
    REQUEST_URL_TO_BE_SHORTENED,
    RESPONSE_URL_TO_BE_SHORTENED_ERROR,
    RESPONSE_URL_TO_BE_SHORTENED_SUCCESS
} from "../constants/actionTypes";


export default (state = {shortenedUrl: "default"}, action) => {
    switch(action.type) {
        case REQUEST_URL_TO_BE_SHORTENED:
            return {...state, shortenedUrl: {}};
        case RESPONSE_URL_TO_BE_SHORTENED_SUCCESS:
            return {...state, shortenedUrl: action.payload};
        case RESPONSE_URL_TO_BE_SHORTENED_ERROR:
            return {...state, shortenedUrl: "Cannot use provided branded term. Please choose another"};
        default:
            return {...state}
    }
}