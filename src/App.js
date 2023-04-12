import React from 'react';
import Project from './Components/Project';
import Task from './Components/Tasks';
import './App.css';


const App = () => {
  return (
    <div>
      <h1>Time Tracking App</h1>
      <div className="container">
        <Project />
        <Task />
      </div>
    </div>
  );
};

export default App;
