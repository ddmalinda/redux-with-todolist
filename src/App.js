
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo } from './store/actions/todoActions';
import { getUserList } from './store/actions/userActions';


function App() {

  const dispatch=useDispatch();
  const todoList=useSelector((state)=>state.todoState);
  const userList=useSelector((state)=>state.userState);


  console.log(todoList)
  console.log(userList)

// for user 
  const hadleGetUserList=()=>{
  
    dispatch(getUserList()) //carete store elemente

  }


  const hadleAddTodo=()=>{
  
    dispatch(createTodo(todoList.length+1,`${todoList.length+1} learn react`,'2025-05-09 21:32')) //carete store elemente

  }

  const hadleDeleteTodo=(id)=>{
    dispatch(deleteTodo(id));
    console.log(id)
  }

  return (
    <div className="App">
      <header className="App-header">
      
        <div style={{justifyContent:'flex'}}>

        <button onClick={hadleAddTodo}> add todo</button>
        <br/>
        {todoList .map((val,key)=>{
          return(
            <button onClick={()=>hadleDeleteTodo(val.id)} key={key} style={{margin:'10px'}}>
             { val.task}
            </button>
          )
        })}
        </div>
         <button onClick={hadleGetUserList}> get userList</button>
         {userList.map((val,key)=>{
          return(
            <div  key={key} style={{justifyContent:'flex'}}  >
             { val.name}
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
