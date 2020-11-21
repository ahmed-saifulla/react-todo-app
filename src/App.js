import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Dev's Todo App</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList/>
    </div>
  );
}

export default App;
