import React, { useState } from 'react';

const TaskForm = ({ projectId, onCreateTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(taskName, projectId);
    setTaskName('');
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        id="taskName"
        value={taskName}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
