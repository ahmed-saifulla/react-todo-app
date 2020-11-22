import React, { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

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

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos);
    }
  }

  const saveToLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }

  // Run only once   
  useEffect(() => {
    getLocalTodos();
  }, [])

  // Run whenever change happens in todos and status data 
  useEffect(() => {
    filterHandler();
    saveToLocalTodos();
  }, [todos, status])

  return (
    <div className="App">
      <header>
        <h1>Today's Tasks</h1>
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} setStatus={setStatus} filterHandler={filterHandler} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
