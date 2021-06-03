import React from 'react';

function Todo({ todo, toggleTodo }) {
    const handleOnChange = (e) => {
        toggleTodo(todo.id)
    }

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleOnChange} checked={todo.complete}/>
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;
