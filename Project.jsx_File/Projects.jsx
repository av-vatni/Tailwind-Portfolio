// src/components/Projects.jsx
import React from 'react';
import projects from '../data/projects';

function Projects() {
  return (
    <>
    <h2>My Projects</h2>
    <p>This section is under development😀</p>
    </>
    // <section>
    //   <h2>My Projects</h2>
    //   <div>
    //     {projects.map((project) => (
    //       <div key={project.id}>
    //         <h3>{project.title}</h3>
    //         <p>{project.description}</p>
    //         <a href={project.link} target="_blank" rel="noopener noreferrer">
    //           View Project
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}

export default Projects;