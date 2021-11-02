import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid';
import 'bulma/css/bulma.min.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // Storing
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

    // Saving
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
        <div classname="main">
            <div className="container">
              <TodoList todos={todos} toggleTodo={toggleTodo} />
              <input ref={todoNameRef} type='text' />
              <button onClick={handleAddTodo}>Add</button>
              <button onClick={handleClearTodos}>Clear</button>
              <div>{todos.filter(todo => !todo.complete).length} left to do</div>
            </div>
        </div>
    </>
  )
}
