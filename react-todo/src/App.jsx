import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [arr, setArr] = useState([{ value: "no task", id: uuidv4() }]); //modified
  const [val, setVal] = useState("");

  function addTaskHandler() {
    if (val.trim() === "") return;
    setArr(prevArr => [...prevArr, { value: val, id: uuidv4() }]);//modified
    setVal("");
  }

  function addInputHandler(event) {
    setVal(event.target.value);
  }

  function deleteHandler(id) {
    setArr((prevTodo) => prevTodo.filter((todo) => todo.id != id))
  }

  function lowerCaseHandler() {
    setArr((prevTodo) => (
      prevTodo.map((todo) => {
        return { ...todo, value: todo.value.toLowerCase() }
      })
    ))
  }

 function upperCaseThisHandler(id) {
  setArr((prevTodo) =>
    prevTodo.map((todo) =>
      todo.id === id ? { ...todo, value: todo.value.toUpperCase() } : todo
    )
  );
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
      <br /> <br />
      <button onClick={addTaskHandler}>Add Tasks</button>

      <ul>
        {arr.map((todos) => (
          <li key={todos.id}>
            <span>{todos.value}</span> &nbsp;&nbsp;

            <button onClick={() => (deleteHandler(todos.id))}>delete</button>

            &nbsp;&nbsp;
            <button onClick={()=>upperCaseThisHandler(todos.id)}>UpperCase This</button>

          </li>
        ))}
      </ul>
      <button onClick={lowerCaseHandler}>LowerCase All</button>
    </div>
  );
}

export default App;
