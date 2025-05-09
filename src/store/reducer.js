export default function reducer(status=[],action) {
    switch(action.type){
        case 'create_todo':
            return [...status,action.payload];
            /* What is the Spread Operator (...)?
            The spread operator is used to unpack elements from an array, object, or other iterable into individual elements.             */ 
        case 'update_todo':
            return;
        case 'remove_todo':
            return;
        case 'change_status':
            return ;
        default :
        return status;
    }
}
/*
{
id:'01',
task:'learn react',
dataTime:'2025-05-09 19:29',
status:'noStarted',
},
{
id:'02',
task:'learn redux',
dataTime:'2025-05-09 19:50',
status:'noStarted',
}*/

/*
if(action is create_todo){
    todo.push(action.payloda)
} else if(action is update_todo){
    find the todo by action.paylod.id
    update the field | action.paylod.field
    with value of action.payload.field
}else if(action is remove_todo){
    find the todo by action.payload.id
    remove it.
}elce if(action is change_status){
    find the todoby action.payload.id
    update the status
}
*/