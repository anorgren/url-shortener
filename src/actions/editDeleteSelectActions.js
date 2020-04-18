import {
    REQUEST_DELETE_FUNCTIONALITY,
    REQUEST_EDIT_FUNCTIONALITY,
} from "../constants/actionTypes";


export const requestEditFunctionality = () => {
    return {
        type: REQUEST_EDIT_FUNCTIONALITY
    }
};

export const requestDeleteFunctionality = () => {
    return {
        type: REQUEST_DELETE_FUNCTIONALITY
    }
};