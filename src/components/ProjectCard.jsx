export default function ProjectCard({ project }) {
  return (
    <article className="border rounded-lg p-5 hover:shadow transition">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm mb-4">{project.description}</p>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="inline-block px-3 py-1 text-sm bg-gray-700 text-white rounded hover:bg-gray-600"
      >
        GitHub ↗
      </a>
    </article>
  );
}
