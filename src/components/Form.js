import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form className="Form">
      <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} />
      <button
        type="submit"
        className="todo-add-btn"
        onClick={submitTodoHandler}
      >
        Add
      </button>
      <div className="select">
        <select name="todos" className="todo-filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
