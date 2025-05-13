import * as Actions from "../actions/userActions";

const initialState={
    loading:'notStarted',
    userList:[],
    error:null,
}
export default function userReducer(state=initialState,action){
    switch(action.type){
        case Actions.GET_USER_LIST_START:
            return {...state,loading:'loading'};

        case Actions.GET_USER_LIST_SUCCSES:
            return{...state,loading:'sucesse',userList:action.payload}

        case Actions.GET_USER_LIST_FALIURE:
            return {...state,error:action.payload}
        default:
            return state;
    }
}