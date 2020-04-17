import {REQUEST_URL_DELETE, RESPONSE_URL_DELETE_ERROR, RESPONSE_URL_DELETE_SUCCESS} from "../constants/actionTypes";
import urlDatabase from "../apis/urlDatabase";

function requestUrlDelete() {
    return {
        type: REQUEST_URL_DELETE
    }
}

function responseDeleteSuccess() {
    return {
        type: RESPONSE_URL_DELETE_SUCCESS
    }
}

function responseDeleteError() {
    return {
        type: RESPONSE_URL_DELETE_ERROR
    }
}

export function deleteShortenedUrl(urlCode) {
    return function(dispatch) {
        dispatch(requestUrlDelete());
        return urlDatabase.delete(`/api/urlShort/${urlCode}`)
            .then(response => dispatch(responseDeleteSuccess())).catch((err) => dispatch(responseDeleteError()))
    }
}