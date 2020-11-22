import React from "react";

import FontAwesome from 'react-fontawesome';

const Form = ({ setInputText, setTodos, todos, inputText, setStatus, filterHandler }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    // clearing input box after adding 
    setInputText("");
  };

  const changeFilterHandler = (e) => {
    setStatus(e.target.value);
    filterHandler()
  }

  return (
    <form className="Form">
      <div>
        <input type="text" placeholder="Do Exercise..." className="todo-input" onChange={inputTextHandler} value={inputText} />
        <button
          type="submit"
          className="todo-add-btn"
          onClick={submitTodoHandler}
        >
          <FontAwesome
            className="fa-plus"
            name="plus"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#c5c3c5' }}
          />
        </button>
      </div>
      <div className="select">
        <select name="todos" className="todo-filter" onChange={changeFilterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
