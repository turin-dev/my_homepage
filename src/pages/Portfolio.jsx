import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';

export default function Portfolio() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">포트폴리오</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
