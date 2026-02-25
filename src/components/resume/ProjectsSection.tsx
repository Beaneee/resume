import { Project } from "@/types/resume";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
        프로젝트
      </h2>
      <div className="space-y-5">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    className="text-xs text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.url && (
                  <a href={project.url} className="text-xs text-blue-500 hover:underline">
                    Demo
                  </a>
                )}
              </div>
              <span className="text-sm text-gray-500">
                {project.startDate} ~ {project.endDate}
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
