import React from 'react';

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="rounded bg-gray-200 p-4 dark:bg-gray-800">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mb-2 text-sm">{description}</p>
      <a
        href={link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}
