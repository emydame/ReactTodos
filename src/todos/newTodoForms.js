import React, { useState} from 'react';
import './newTodoFOrm.css'

const TodoListForm=() =>{
    const [inputValue, setInputValue]= useState('');
return(

    <div className="new-todo-form">
        <input type="text" value={inputValue}
        placeholder="Type your neww todos here"
        onChange={e =>setInputValue(e.target.value)}
        />
        <button className="new-todo-button"> Create Todos</button>
    </div>
);
}
export default TodoListForm;