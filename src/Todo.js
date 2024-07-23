import React from 'react';
import './Todo.css'; // Import the CSS file for styling

// Functional component to display a single todo item
function Todo({ todo, toggleTodo }) {
  return (
    <div className="todo">
      {/* Checkbox to mark the todo item as completed or not */}
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      {/* Display the todo text with conditional styling based on completion status */}
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
    </div>
  );
}

export default Todo;
