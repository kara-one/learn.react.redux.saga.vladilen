import { appReducer } from "./appReducer";
import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
});