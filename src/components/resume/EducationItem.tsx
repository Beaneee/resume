import type { Education } from "@/types/resume";

export default function EducationItem({ edu }: { edu: Education }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div className="heading-3">{edu.school}</div>
      <div className="n-text-gray">
        {edu.major} | {edu.period}
      </div>
    </div>
  );
}
