import {REQUEST_BRANDED_URL, REQUEST_UNBRANDED_URL} from "../constants/actionTypes";


export const requestBranded = () => {
    return {
        type: REQUEST_BRANDED_URL
    }
};

export const requestUnbranded = () => {
    return {
        type: REQUEST_UNBRANDED_URL
    }
};