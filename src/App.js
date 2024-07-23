import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css'; // Import the CSS file for styling
import { v4 as uuidv4 } from 'uuid';

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo item
  const addTodo = text => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  // Function to toggle the completion status of a todo item
  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to handle form submission for adding new todos
  const handleAddTodo = event => {
    event.preventDefault(); // Prevent the default form submission behavior
    const input = document.getElementById('new-todo');
    if (input.value.trim()) {
      addTodo(input.value);
      input.value = ''; // Clear the input field after adding the todo
    }
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      {/* Render the TodoList component and pass down the todos and toggleTodo function as props */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      
      {/* Form to add a new todo item */}
      <form onSubmit={handleAddTodo}>
        <input type="text" id="new-todo" placeholder="Enter a new todo..." />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
