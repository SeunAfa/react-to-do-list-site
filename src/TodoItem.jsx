export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, dateAdded }) {
  return (
    <li className="todoItem-Card-Container">
      <label className="todoItem-dataWrapper">
        <div className="todoItem-checkbox">
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        </div>
        <div className="todoItem-data">
            <span className="todoItem-title">{title}</span>  
            <span className="dateAdded">({dateAdded})</span> 
        </div>
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}