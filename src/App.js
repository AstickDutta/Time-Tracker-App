import {useState} from "react"
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Projects from './Components/Project';
import Tasks from './Components/Tasks';
import ProjectForm from './Components/ProjectFrom/ProjectFrom';
import "./App.css"

const App = () => {
  const [projects, setProjects] = useState([]);

  const handleCreateProject = (projectName) => {
    const newProject = {
      id: Date.now(),
      name: projectName,
    };
    setProjects([...projects, newProject]);
  };
  return (
    <Router>
      <div>
        <Navbar bg="Dark" expand="lg">
          <Navbar.Brand href="/">Time Tracking App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <Routes>
            <Route path="/" exact component={Projects} />
            <ProjectForm onCreateProject={handleCreateProject} />
            <Route path="/projects/:projectId/tasks" component={Tasks} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
