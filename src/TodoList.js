import React from 'react';
import Todo from './Todo';

function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />);
}

export default TodoList;
