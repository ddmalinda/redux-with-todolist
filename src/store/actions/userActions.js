import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const GET_USER_LIST_SUCCSES = 'GET_USER_LIST_SUCCSES';
export const GET_USER_LIST_FALIURE = 'GET_USER_LIST_FALIURE';
export const GET_USER_LIST_START = 'GET_USER_LIST_START';

function getUserList() {
    return (dispatch) => {
        dispatch({
            type: GET_USER_LIST_START
        })

        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response.data);
            dispatch({
                type: GET_USER_LIST_SUCCSES,
                payload: response.data,
            })
        })
            .catch((e) => {
                dispatch({
                    type: GET_USER_LIST_FALIURE,
                    payload:e,
                })
            })
    };
}

export { getUserList }