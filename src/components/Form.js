import React from "react";

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value)
  };

  return (
    <form className="Form">
      <input type="text" className="todo-input" onChange={inputTextHandler} />
      <button type="submit" className="todo-add-btn">
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
