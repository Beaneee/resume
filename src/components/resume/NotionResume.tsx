"use client";

import { useState } from "react";
import { resumeData } from "@/data/resumeData";
import type {
  Achievement,
  CoreCompetency,
  Project,
  WorkExperience,
  Education,
  SkillCategory,
} from "@/types/resume";

/* ───────────────────────── Sub-components ───────────────────────── */

function ToggleItem({ achievement }: { achievement: Achievement }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="toggle-item">
      <div className="toggle-header" onClick={() => setOpen((prev) => !prev)}>
        <span className="toggle-icon">{open ? "▾" : "▸"}</span>
        <span className="toggle-title">{achievement.title}</span>
      </div>
      {open && (
        <div className="toggle-content">
          {achievement.details.map((detail, i) => (
            <div
              key={i}
              className={`indent ${detail.highlight ? "n-text-red" : ""}`}
            >
              {detail.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
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

function CompetencyItem({ item }: { item: CoreCompetency }) {
  return (
    <li>
      <strong>{item.title}:</strong>{" "}
      {item.text}
      {item.highlight && (
        <span className="n-text-red">{item.highlight}</span>
      )}
      {item.suffix}
    </li>
  );
}

function SkillsTable({ skills }: { skills: SkillCategory[] }) {
  return (
    <table className="notion-table">
      <thead>
        <tr>
          <th style={{ width: "22%" }}>카테고리</th>
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

function ExperienceSection({ exp }: { exp: WorkExperience }) {
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

function EducationItem({ edu }: { edu: Education }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div className="heading-3">{edu.school}</div>
      <div className="n-text-gray">
        {edu.major} | {edu.period}
      </div>
    </div>
  );
}

/* ───────────────────────── Main Component ───────────────────────── */

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
