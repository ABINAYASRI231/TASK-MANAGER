import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text} - <em>{task.dueDate}</em></span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
