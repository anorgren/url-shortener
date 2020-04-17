import {REQUEST_URL_DELETE, RESPONSE_URL_DELETE_ERROR, RESPONSE_URL_DELETE_SUCCESS} from "../constants/actionTypes";

export default(state ={deleteMsg: ""}, action) => {
    switch(action.type) {
        case REQUEST_URL_DELETE:
            return { ...state, deleteMsg: ""};
        case RESPONSE_URL_DELETE_SUCCESS:
            return { ...state, deleteMsg: "Successfully deleted your url."};
        case RESPONSE_URL_DELETE_ERROR:
            return { ...state, deleteMsg: "Error deleting url."};
        default:
            return {...state}
    }
}