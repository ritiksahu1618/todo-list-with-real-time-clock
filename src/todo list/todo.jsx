import { useState, useEffect } from "react";
import './Todo.css'

function Todo() {
  const [inputvalue, setInputvalue] = useState(""); // Input box value
  const [task, setTask] = useState([]);             // Task list
  const [editindex, setEditindex] = useState(null); // Current editing index
  const [time, setTime] = useState(new Date());


  // Clock
  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  // Add Task
  const add = (event) => {
    event.preventDefault();
    if (inputvalue.trim() === "") return;
    setTask([...task, inputvalue]);
    setInputvalue("");
  };

  // Edit Task
  const editTask = (index) => {
    setInputvalue(task[index]);
    setEditindex(index);
  };

  // Delete Task
  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  // Update edited task
  const updatetask = (e) => {
    e.preventDefault();
    const updatedTasks = task.map((t, i) => (i === editindex ? inputvalue : t));
    setTask(updatedTasks);
    setEditindex(null);
    setInputvalue("");
  };

  // Clear all tasks
  const clearTask = () => {
    setTask([]);
  
  };

  return (
    <div id="todo-app">
      <h1 className="todo-title">✨ Todo List ✨</h1>

      <p className="clock">
        {time.toLocaleDateString()}  ✨ {time.toLocaleTimeString()}
      </p>

      <form
        className="todo-form"
        onSubmit={editindex !== null ? updatetask : add}
      >
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="todo-btn">
          {editindex !== null ? "Update" : "Add"}
        </button>
      </form>

      {/* Task List */}
      <ul className="todo-list">
        {task.length === 0 ? (
          <p className="empty-msg">No tasks yet ✨</p>
        ) : (
          task.map((item, index) => (
            <li key={index} className="todo-item">
              <span className="task-text">{item}</span>
              <div className="btn-group">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editTask(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  ✖
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      <button className="clearTask" onClick={clearTask}>clear</button>
    </div>
  );
}

export default Todo;
