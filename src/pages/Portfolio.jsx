import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
