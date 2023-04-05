import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Form, Button } from 'react-bootstrap';

const Tasks = ({ match }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get(`/api/projects/${match.params.projectId}/tasks`)
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, [match.params.projectId]);

  const addTask = event => {
    event.preventDefault();
    axios.post(`/api/projects/${match.params.projectId}/tasks`, { name: newTask })
      .then(response => {
        setTasks([...tasks, response.data]);
        setNewTask('');
      })
      .catch(error => console.error(error));
  };

  const completeTask = taskId => {
    axios.put(`/api/tasks/${taskId}`, { completed: true })
      .then(response => {
        const updatedTasks = tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed: true };
          }
          return task;
        });
        setTasks(updatedTasks);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Tasks for Project {match.params.projectId}</h1>
      <ListGroup>
        {tasks.map(task => (
          <ListGroup.Item
            key={task.id}
            variant={task.completed ? "success" : ""}
          >
            {task.name}
            {!task.completed && (
              <Button
                variant="outline-success"
                size="sm"
                className="float-right"
                onClick={() => completeTask(task.id)}
              >
                Complete
              </Button>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={addTask}>
        <Form.Group>
          <Form.Label>New Task:</Form.Label>
          <Form.Control
            type="text"
            value={newTask}
            onChange={event => setNewTask(event.target.value)}
          />
        </Form.Group>
        <Button type="submit">Add Task</Button>
      </Form>
    </div>
  );
};

export default Tasks;
