import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (<Todo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />))}
        </div>
    );


};