import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [arr, setArr] = useState([{value:"no task",id:uuidv4()}]); //modified
  const [val, setVal] = useState("");

  function addTaskHandler() {
    if (val.trim() === "") return; 
    setArr(prevArr => [...prevArr, {value:val,id:uuidv4()}]);//modified
    setVal("");
  }

  function addInputHandler(event) {
    setVal(event.target.value);
  }

  function deleteHandler(id){
    setArr((prevTodo)=> prevTodo.filter((todo)=>todo.id!=id))
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="mention your task"
        value={val}
        onChange={addInputHandler}
      />
      <br />
      <button onClick={addTaskHandler}>Add Task</button>

      <ul>
        {arr.map((todos) => (
          <li key={todos.id}>
            <span>{todos.value}</span> &nbsp;&nbsp;
            <button onClick={()=>(deleteHandler(todos.id))}>delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
