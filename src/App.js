
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo } from './store/actions';


function App() {

  const dispatch=useDispatch();
  const state=useSelector((state)=>state);

  console.log(state)

  const hadleAddTodo=()=>{
  
    dispatch(createTodo(state.length+1,`${state.length+1} learn react`,'2025-05-09 21:32')) //carete store elemente
    dispatch(createTodo(state.length+2,`${state.length+2}`+' learn redux','2025-05-09 21:32'))
    dispatch(createTodo(state.length+3,`${state.length+3}`+' learn  anything','2025-05-09 21:32'))

  }

  const hadleDeleteTodo=(id)=>{
    dispatch(deleteTodo(id));
    console.log(id)
  }

  return (
    <div className="App">
      <header className="App-header">
      
        
        <button onClick={hadleAddTodo}> add todo</button>
        <br/>
        {state.map((val,key)=>{
          return(
            <button onClick={()=>hadleDeleteTodo(val.id)} key={key} style={{margin:'10px'}}>
             { val.task}
            </button>
          )
        })}
      </header>
    </div>
  );
}

export default App;
