import urlDatabase from "../apis/urlDatabase";
import {
    REQUEST_URL_TO_BE_SHORTENED,
    RESPONSE_URL_TO_BE_SHORTENED_ERROR,
    RESPONSE_URL_TO_BE_SHORTENED_SUCCESS
} from "../constants/actionTypes";


function requestUrlShortened() {
    return {
        type: REQUEST_URL_TO_BE_SHORTENED
    }
}

function receiveShortUrlSuccess(shortUrl) {
    return {
        type: RESPONSE_URL_TO_BE_SHORTENED_SUCCESS,
        payload: shortUrl
    }
}

function receiveShortUrlError(error) {
    return {
        type: RESPONSE_URL_TO_BE_SHORTENED_ERROR,
        payload: error
    }
}

export function createNewShortenedUrl(urlObject) {
    return function(dispatch) {
        dispatch(requestUrlShortened());
        return urlDatabase.post("/url", urlObject)
            .then(response => dispatch(receiveShortUrlSuccess(response.data)),
                err => dispatch(receiveShortUrlError(err)))
    }
}