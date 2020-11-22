import React, { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  
  useEffect(()=>{
    getLocalTodos();
  }, [])

  useEffect(()=>{
    filterHandler();
    saveToLocalTodos();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const getLocalTodos = () =>{
    let localTodos = JSON.parse(localStorage.getItem('todos'))
    setTodos(localTodos)
  }

  const saveToLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else{
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Dev's Todo App</h1>
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} setStatus={setStatus} filterHandler={filterHandler}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
