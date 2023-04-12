import React, { useState } from 'react';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleAddProject = () => {
    if (projectName !== '') {
      setProjects([...projects, projectName]);
      setProjectName('');
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      <input
        type="text"
        placeholder="Enter project name"
        value={projectName}
        onChange={handleInputChange}
      />
      <button onClick={handleAddProject}>Add Project</button>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
