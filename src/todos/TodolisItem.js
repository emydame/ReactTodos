import React from 'react';
import './TodoList.css';

const TodoListItem=({ todo})=>(
<div className="todo-item-container">
<h3>{ todo.text}</h3>
<div className="button-container">

<button className="buttin-completed" >Mark As Complete</button>
<button className="button-remove">Remove</button>
</div>

</div>

);

export default TodoListItem;