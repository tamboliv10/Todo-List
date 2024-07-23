import React from 'react';
import Todo from './Todo';
import './TodoList.css'; // Import the CSS file for styling

// Functional component to display a list of todo items
function TodoList({ todos, toggleTodo }) {
  return (
    <div className="todo-list">
      {/* Map over the todos array and render a Todo component for each item */}
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList;
