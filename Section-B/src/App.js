import React, { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (e) => {
    e.preventDefault();

    if (!title || !description || !year) {
      alert("Please fill all fields");
      return;
    }

    const newProject = {
      id: Date.now(),
      title,
      description,
      year,
    };

    setProjects([...projects, newProject]);

    setTitle("");
    setDescription("");
    setYear("");
  };

  const clearPortfolio = () => {
    setProjects([]);
    localStorage.removeItem("projects");
  };

  return (
    <div className="container">
      <h1>Portfolio Item Manager</h1>

      <form onSubmit={addProject} className="project-form">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>

      <button className="clear-btn" onClick={clearPortfolio}>
        Clear Portfolio
      </button>

      {projects.length === 0 ? (
        <div className="empty-state">
          <h2>Getting Started</h2>
          <p>
            You haven't added any projects to your portfolio yet!
          </p>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              year={project.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;