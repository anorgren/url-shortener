import {REQUEST_URL_EDIT, RESPONSE_URL_EDIT_ERROR, RESPONSE_URL_EDIT_SUCCESS} from "../constants/actionTypes";
import urlDatabase from "../apis/urlDatabase";

function requestUrlEdit() {
    return {
        type: REQUEST_URL_EDIT
    }
}

function responseUrlSuccess(editedUrl) {
    return {
        type: RESPONSE_URL_EDIT_SUCCESS,
        payload: editedUrl
    }
}

function responseUrlError() {
    return {
        type: RESPONSE_URL_EDIT_ERROR
    }
}

export function editShortenedUrl(urlObject) {
    return function(dispatch) {
        dispatch(requestUrlEdit());
        return urlDatabase.patch(`/api/urlShort/${urlObject.urlCode}`, urlObject)
            .then(response => dispatch(responseUrlSuccess(response.data)),
                responseUrlError)
    }
}