import { Experience } from "@/types/resume";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
        경력
      </h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id}>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>
                  {exp.startDate} ~ {exp.endDate}
                </p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className="mt-2 space-y-1">
              {exp.description.map((item, index) => (
                <li key={index} className="text-gray-700 text-sm flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
