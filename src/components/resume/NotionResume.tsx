"use client";

import { resumeData } from "@/data/resumeData";
import CompetencyItem from "./CompetencyItem";
import SkillsTable from "./SkillsTable";
import ExperienceSection from "./ExperienceSection";
import EducationItem from "./EducationItem";

export default function NotionResume() {
  const data = resumeData;

  return (
    <div className="notion-page">
      <div className="notion-container">

        {/* ── Header ── */}
        <div className="page-title">{data.name}</div>
        <div className="contact-info">
          <span>📧 {data.contact.email}</span>
          <span>•</span>
          <a
            href={data.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 {data.contact.github}
          </a>
        </div>

        <div className="notion-divider" />

        {/* ── Professional Summary ── */}
        <div className="heading-1">💼 Professional Summary</div>
        <div className="callout">
          <div className="callout-icon">👨‍💻</div>
          <div>{data.summary}</div>
        </div>

        {/* ── Core Competencies ── */}
        <div className="heading-2">🎯 핵심 역량</div>
        <ul className="bullet-list">
          {data.coreCompetencies.map((item, i) => (
            <CompetencyItem key={i} item={item} />
          ))}
        </ul>

        <div className="notion-divider" />

        {/* ── Technical Skills ── */}
        <div className="heading-1">🛠️ Technical Skills</div>
        <SkillsTable skills={data.skills} />

        <div className="notion-divider" />

        {/* ── Work Experience ── */}
        <div className="heading-1">💼 Work Experience</div>
        {data.experience.map((exp, i) => (
          <ExperienceSection key={i} exp={exp} />
        ))}

        <div className="notion-divider" />

        {/* ── Education ── */}
        <div className="heading-1">🎓 Education</div>
        {data.education.map((edu, i) => (
          <EducationItem key={i} edu={edu} />
        ))}

      </div>
    </div>
  );
}
