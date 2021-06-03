import React from 'react';
import Todo from './Todo';

function TodoList({ todos }) {
  return todos.map((todo) => <Todo key={todo.id} todo={todo} />);
}

export default TodoList;
