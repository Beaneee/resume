import { Skill } from "@/types/resume";

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
        기술 스택
      </h2>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.category} className="flex gap-4">
            <span className="text-sm font-semibold text-gray-700 w-24 shrink-0 pt-0.5">
              {skill.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
