import type { Project } from "@/types/resume";
import ToggleItem from "./ToggleItem";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-title">{project.title}</div>
        <div className="project-meta">{project.period}</div>
      </div>
      <div className="project-desc">{project.description}</div>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="n-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="toggle-list">
        {project.achievements.map((achievement, i) => (
          <ToggleItem key={i} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
