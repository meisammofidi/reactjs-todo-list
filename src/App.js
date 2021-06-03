import React, { useState } from 'react'
import TodoList from './TodoList'

const initialState = [
  {id:1, name:'Meisam Mofidi', complete:false}
]

function App() {

  const [todos, setTodos]= useState(initialState)


  return (
    <>
      <div>TODO List</div>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <TodoList todos={todos}/>
    </>
  );
}

export default App;
