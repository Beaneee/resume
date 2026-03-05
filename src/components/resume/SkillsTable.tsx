import type { SkillCategory } from "@/types/resume";

export default function SkillsTable({ skills }: { skills: SkillCategory[] }) {
  return (
    <table className="notion-table">
      <thead>
        <tr>
          <th style={{ width: "28%" }}>카테고리</th>
          <th>기술 스택</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((skill) => (
          <tr key={skill.category}>
            <td>
              <strong>{skill.category}</strong>
            </td>
            <td>
              <div className="tags" style={{ margin: 0 }}>
                {skill.items.map((item) => (
                  <span key={item} className="n-tag blue">
                    {item}
                  </span>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
