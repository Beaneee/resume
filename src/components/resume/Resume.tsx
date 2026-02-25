import { ResumeData } from "@/types/resume";
import Header from "./Header";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import CertificatesSection from "./CertificatesSection";

interface ResumeProps {
  data: ResumeData;
}

export default function Resume({ data }: ResumeProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white p-10 shadow-sm print:shadow-none print:p-0">
      <Header personalInfo={data.personalInfo} />
      <ExperienceSection experiences={data.experience} />
      <SkillsSection skills={data.skills} />
      <ProjectsSection projects={data.projects} />
      <EducationSection education={data.education} />
      <CertificatesSection certificates={data.certificates} />
    </div>
  );
}
