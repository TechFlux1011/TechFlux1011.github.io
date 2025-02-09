// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  { id: 1, title: 'Second Home 🏡', description: 'A React ecommerce app aiming to provide a place for users to buy or sell a missing item from a set. Find your missing piece at Second Home! 💖', link: 'https://github.com/TechFlux1011/second-home-main.git' },
  { id: 2, title: 'Budget Boss💰💪', description: 'A React fintech app aiming to make budgeting a simple task for anyone.', link: 'https://github.com/TechFlux1011/BudgetBoss.git' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
