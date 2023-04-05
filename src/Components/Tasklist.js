import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { id } = useParams();

  const handleCreateTask = (taskName, projectId) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      projectId: projectId,
    };
    setTasks([...tasks, newTask]);
  };

  const projectTasks = tasks.filter((task) => task.projectId === id);

  return (
    <div>
      <h2>Tasks for Project {id}:</h2>
      <TaskForm projectId={id} onCreateTask={handleCreateTask} />
      <ul>
        {projectTasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
