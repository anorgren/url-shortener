import {REQUEST_BRANDED_URL, REQUEST_UNBRANDED_URL} from "../constants/actionTypes";

export default (state = {isBranded: false}, action) => {
    switch(action.type) {
        case REQUEST_BRANDED_URL:
            return {...state, isBranded: true};
        case REQUEST_UNBRANDED_URL:
            return {...state, isBranded: false};
        default:
            return {...state}
    }
}