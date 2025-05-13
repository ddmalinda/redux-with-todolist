export const GET_USER_LIST='GET_USER_LIST';

function getUserList(){
    return{
        type:GET_USER_LIST,
        payload:[{
            name:'Dasith'
        },{
            name:'Malinda'
        }]

    }
}

export{ getUserList}