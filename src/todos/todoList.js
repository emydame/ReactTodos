import React from 'react';
import TodoListItem from './TodolisItem';
import newToDoFrom from './newTodoForms';

const TodoList=( {todos =[]})=>(
    <div className="wrapper">
        <newToDoFrom />
        {todos.map(todo=><TodoListItem todo={todo} />)}
    </div>

);

export default TodoList;