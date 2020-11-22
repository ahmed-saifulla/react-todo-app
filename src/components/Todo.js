import React from 'react';

import FontAwesome from 'react-fontawesome';


const Todo = ({ todo, todos, setTodos }) => {
    const toggleTodoStatusHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    const deleteTodoHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
    }
    return (
        <div className={todo.completed ? 'Todo completed' : 'Todo'}>
            <li className="todo-item">{todo.text}</li>
            <button className="done-item" onClick={toggleTodoStatusHandler}>
                {todo.completed ?
                    <FontAwesome
                        className="fa-undo"
                        name="undo"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#c5c3c5', opacity: 0.5 }}
                    />
                    :
                    <FontAwesome
                        className="fa-check"
                        name="check"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#c5c3c5' }}
                    />}</button>
            <button className="delete-item" onClick={deleteTodoHandler}>
                <FontAwesome
                    className="fa-trash"
                    name="trash"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ff3223', opacity: 0.5 }}
                />
            </button>
        </div>
    );
}

export default Todo;