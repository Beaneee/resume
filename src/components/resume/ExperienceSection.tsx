import type { WorkExperience } from "@/types/resume";
import ProjectCard from "./ProjectCard";

export default function ExperienceSection({ exp }: { exp: WorkExperience }) {
  return (
    <div>
      <div className="heading-2">{exp.company}</div>
      <span className="n-badge">
        {exp.role} | {exp.period}
      </span>
      {exp.projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}
