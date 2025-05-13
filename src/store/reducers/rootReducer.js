import { combineReducers } from "redux";
import userReducer from "./userReducer";
import todoReducer from "./todoReducer";

const rootReducer=combineReducers({
    todoState:todoReducer,
    userState:userReducer,
})

export default rootReducer;
