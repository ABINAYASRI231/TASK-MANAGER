import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAdd }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAdd(text, dueDate);
      setText('');
      setDueDate('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
