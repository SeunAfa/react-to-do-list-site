import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  // Separate incomplete and completed tasks
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}

      {/* Render incomplete tasks */}
      {incompleteTodos.map(todo => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          dateAdded={todo.dateAdded}
        />
      ))}

      {/* Show a title above the completed tasks if there are any */}
      {completedTodos.length > 0 && <h2>Completed Tasks</h2>}

      {/* Render completed tasks */}
      {completedTodos.map(todo => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          dateAdded={todo.dateAdded}
        />
      ))}
    </ul>
  );
}
