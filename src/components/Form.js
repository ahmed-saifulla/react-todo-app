import React from "react";

const Form = () => {
  return (
    <form className="Form">
      <input type="text" className="todo-input" />
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