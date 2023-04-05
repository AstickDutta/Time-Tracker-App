import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Form, Button } from 'react-bootstrap';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  const addProject = event => {
    event.preventDefault();
    axios.post('/api/projects', { name: newProject })
      .then(response => {
        setProjects([...projects, response.data]);
        setNewProject('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Projects</h1>
      <ListGroup>
        {projects.map(project => (
          <ListGroup.Item key={project.id}>{project.name}</ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={addProject}>
        <Form.Group>
          <Form.Label>New Project:</Form.Label>
          <Form.Control
            type="text"
            value={newProject}
            onChange={event => setNewProject(event.target.value)}
          />
        </Form.Group>
        <Button type="submit">Add Project</Button>
      </Form>
    </div>
  );
};

export default Projects;
