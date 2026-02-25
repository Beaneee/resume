import { Education } from "@/types/resume";

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
        학력
      </h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{edu.institution}</h3>
              <p className="text-gray-700">
                {edu.degree} · {edu.field}
              </p>
              {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
              {edu.description && (
                <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
              )}
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>
                {edu.startDate} ~ {edu.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
