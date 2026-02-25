import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "홍길동",
    title: "Frontend Developer",
    email: "hong@example.com",
    phone: "010-1234-5678",
    location: "서울, 대한민국",
    website: "https://example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    summary:
      "5년 경력의 프론트엔드 개발자로, React와 TypeScript를 활용한 웹 애플리케이션 개발을 전문으로 합니다. 사용자 경험 향상과 코드 품질에 집중하며, 팀 협업을 통한 제품 개선에 관심이 많습니다.",
  },
  experience: [
    {
      id: "exp-1",
      company: "테크 스타트업",
      position: "Senior Frontend Developer",
      startDate: "2022-03",
      endDate: "현재",
      location: "서울",
      description: [
        "React, TypeScript 기반 SaaS 대시보드 개발 및 유지보수",
        "컴포넌트 라이브러리 설계 및 Storybook 문서화",
        "웹 성능 최적화로 LCP 40% 개선",
        "주니어 개발자 멘토링 및 코드 리뷰",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Query"],
    },
    {
      id: "exp-2",
      company: "IT 솔루션 기업",
      position: "Frontend Developer",
      startDate: "2019-06",
      endDate: "2022-02",
      location: "서울",
      description: [
        "Vue.js 기반 B2B 관리자 플랫폼 개발",
        "REST API 연동 및 상태 관리 구현",
        "크로스 브라우저 호환성 대응",
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "Vuex"],
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "한국대학교",
      degree: "학사",
      field: "컴퓨터공학",
      startDate: "2015-03",
      endDate: "2019-02",
      gpa: "3.8 / 4.5",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js"],
    },
    {
      category: "스타일링",
      items: ["Tailwind CSS", "SCSS", "Styled Components", "CSS Modules"],
    },
    {
      category: "도구 & 기타",
      items: ["Git", "Webpack", "Vite", "Jest", "Figma", "Jira"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      name: "이력서 템플릿 생성기",
      description: "Next.js와 Tailwind CSS로 만든 커스터마이징 가능한 이력서 템플릿",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/example/resume",
      startDate: "2024-01",
      endDate: "2024-03",
    },
  ],
  certificates: [
    {
      id: "cert-1",
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2019-11",
    },
  ],
};
