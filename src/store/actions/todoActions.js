//Actoin creators
export const CREATE_TODO='CREATE_TODO'
export const DELETE_TODO='DELETE_TODO'

function createTodo(id,task,dataTime){
    return{
      type:CREATE_TODO,
      payload:{
        id,
        task,
        dataTime,
        status:'noStarted'
    }
    }}

function deleteTodo(id){
    return{
        type:DELETE_TODO,
        payload:id
    }
}

  export {createTodo,deleteTodo}