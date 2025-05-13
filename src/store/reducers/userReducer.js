import { GET_USER_LIST } from "../actions/userActions";

export default function userReducer(state=[],action){
    switch(action.type){
        case GET_USER_LIST:
            return[...state,...action.payload]
        default:
            return state;
    }
}