import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, year }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{year}</span>
    </div>
  );
}

export default ProjectCard;