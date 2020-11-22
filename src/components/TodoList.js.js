import React from "react";

import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos ? 
        filteredTodos.map(todo =>{
          return(
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
          )
        }) : null}
      </ul>
    </div>
  );
};

export default TodoList;
