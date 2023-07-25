import {combineReducers} from "redux";
import {PostReducer} from "./PostReducer";

export const rootReducer = combineReducers({
    post: PostReducer
})