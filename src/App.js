import React, { useRef, useState, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const initialState = [{ id: 1, name: 'Meisam Mofidi', complete: false }];
const LOCAL_STORAGE_KEY = 'todoslist';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === '') return;

    setTodos((preTodo) => [
      ...preTodo,
      { id: uuidv4(), name: name, complete: false },
    ]);
    todoNameRef.current.value = null;
  };

  const handleClearComplete = () => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((t) => t.complete === false);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  return (
    <>
      <div>{todos.filter((t) => !t.complete).length} item(s) left</div>
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearComplete}>Clear Complete</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
