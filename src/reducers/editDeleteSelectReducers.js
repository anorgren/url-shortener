import {
    REQUEST_DELETE_FUNCTIONALITY,
    REQUEST_EDIT_FUNCTIONALITY,
} from "../constants/actionTypes";

export default (state = {isEdit: true}, action) => {
    switch(action.type) {
        case REQUEST_EDIT_FUNCTIONALITY:
            return {...state, isEdit: true};
        case REQUEST_DELETE_FUNCTIONALITY:
            return {...state, isEdit: false};
        default:
            return {...state}
    }
}