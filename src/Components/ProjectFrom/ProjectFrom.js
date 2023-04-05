import React, { useState } from 'react';

const ProjectForm = ({ onCreateProject }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProject(projectName);
    setProjectName('');
  };

  const handleChange = (e) => {
    setProjectName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="projectName">Project Name:</label>
      <input
        type="text"
        id="projectName"
        value={projectName}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
