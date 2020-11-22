import React from 'react';

const Todo = ({todo , todos , setTodos}) =>{
const toggleTodoStatusHandler =() =>{
    setTodos(todos.map(item => {
        if(item.id === todo.id){
            return { 
                ...item , completed : !item.completed
            }
        }
        return item;
    }))
}
const deleteTodoHandler =() =>{
    setTodos(todos.filter(element => element.id !== todo.id))
}
    return(
      <div className="Todo">
          <li className="todo-item">{todo.text}</li>
          <button className="done-item" onClick={toggleTodoStatusHandler}> {todo.completed ? "Uncheck" : "check"}</button>
          <button className="delete-item" onClick={deleteTodoHandler}> Delete</button>
      </div>  
    );
}

export default Todo;