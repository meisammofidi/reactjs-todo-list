import React from 'react';

function Todo({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" />
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;
