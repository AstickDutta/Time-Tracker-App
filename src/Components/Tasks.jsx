import React, { useState } from 'react';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName !== '') {
      setTasks([...tasks, taskName]);
      setTaskName('');
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
