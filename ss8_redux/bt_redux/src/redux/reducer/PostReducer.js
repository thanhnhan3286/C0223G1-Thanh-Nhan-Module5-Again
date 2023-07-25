import {CREATE_POST, GET_ALL_POST} from "../action/Type";


const initialState = [];
export const PostReducer = (post = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_POST:
            return payload;
        case CREATE_POST:
            return [payload, ...post];
        default:
            return post;
    }
}