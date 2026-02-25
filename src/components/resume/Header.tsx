import { PersonalInfo } from "@/types/resume";

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export default function Header({ personalInfo }: HeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-1">{personalInfo.name}</h1>
      <p className="text-xl text-blue-600 font-medium mb-4">{personalInfo.title}</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <span>{personalInfo.email}</span>
        <span>{personalInfo.phone}</span>
        <span>{personalInfo.location}</span>
        {personalInfo.github && (
          <a href={personalInfo.github} className="text-blue-500 hover:underline">
            GitHub
          </a>
        )}
        {personalInfo.linkedin && (
          <a href={personalInfo.linkedin} className="text-blue-500 hover:underline">
            LinkedIn
          </a>
        )}
      </div>
      {personalInfo.summary && (
        <p className="mt-4 text-gray-700 leading-relaxed">{personalInfo.summary}</p>
      )}
    </header>
  );
}
