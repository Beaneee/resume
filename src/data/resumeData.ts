import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  name: "김종빈",
  contact: {
    email: "dev.bean06@gmail.com",
    github: "github.com/Beaneee",
    githubUrl: "https://github.com/Beaneee",
  },
  summary:
    "4년간 React 기반 서비스를 개발하고 운영해온 프론트엔드 개발자입니다. LLM 챗봇의 SSE 스트리밍 응답 처리와 요청 중단(Abort) UX를 직접 설계하고 구현하며 생성형 AI 서비스를 만들어왔고, 신규 프로젝트에서는 아키텍처 설계와 공통 컴포넌트 표준화를 맡아왔습니다. 기획 단계부터 참여해 기술 검토와 화면 구체화를 함께하는 방식으로 일합니다.",
  coreCompetencies: [
    {
      title: "AI 특화 인터페이스",
      text: "LLM 챗봇 SSE 스트리밍 응답 처리 및 Abort UX 설계로 체감 대기 시간 ",
      highlight: "25% 단축",
    },
    {
      title: "컴포넌트 표준화",
      text: "테이블, 에디터 등 공통 컴포넌트 단위 표준 설계로 코드 일관성 확보 및 유지보수 비용 감소",
    },
    {
      title: "성능 최적화",
      text: "대용량 데이터 렌더링 성능 ",
      highlight: "3배 개선",
      suffix: " (virtualization 구현)",
    },
    {
      title: "팀 리딩",
      text: "요구사항 분석, 업무 분배, 일정 관리를 통한 프로젝트 성공적 릴리즈 (기여도 90%)",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "Vue", "Next.js"],
    },
    {
      category: "State Management",
      items: ["Redux", "Zustand", "Jotai"],
    },
    {
      category: "Styling",
      items: ["Styled-components", "Tailwindcss"],
    },
    {
      category: "Build Tools",
      items: ["Vite", "CRA", "pnpm"],
    },
  ],
  experience: [
    {
      company: "투라인클라우드",
      role: "Frontend Developer",
      period: "2022.06 ~ 재직 중",
      projects: [
        {
          title: "S0사 구매 AI 플랫폼",
          period: "2025.01 ~ 2025.03",
          description: "협력사 추천 및 RFP 생성 생성형 AI 서비스",
          tags: ["TypeScript", "React", "Jotai", "Vite", "pnpm"],
          achievements: [
            {
              title: "AI 챗봇 스트리밍 인터페이스 구현",
              details: [
                {
                  text: "→ fetch SSE(event-stream) 기반 스트리밍 응답 처리 기능 구현",
                  highlight: false,
                },
                {
                  text: "→ LLM 응답을 실시간으로 화면에 렌더링하여 사용자 대기 경험 개선",
                  highlight: false,
                },
              ],
            },
            {
              title: "LLM API 응답 지연 환경에서 사용자 제어권 강화를 위한 Abort UX 설계",
              details: [
                {
                  text: "→ LLM API 특성상 응답 지연이 불가피한 상황에서 사용자 이탈 문제 해결 필요",
                  highlight: false,
                },
                {
                  text: "→ 기획 단계에서 Abort 인터랙션을 제안하여 사용자가 요청을 직접 중단 가능하도록 설계",
                  highlight: false,
                },
                {
                  text: "→ Jotai 기반 전역 Abort 상태 설계로 API 요청 취소 로직 공통화 및 불필요한 요청 최소화",
                  highlight: false,
                },
                {
                  text: "→ 결과: 평균 체감 대기 시간 25% 단축",
                  highlight: true,
                },
              ],
            },
            {
              title: "컴포넌트 단위 공통 컴포넌트 표준 설계 (기여도 70%)",
              details: [
                {
                  text: "→ 테이블, 페이지네이션, text-editor, input 등 재사용 가능한 구조로 설계",
                  highlight: false,
                },
                {
                  text: "→ 결과: 신규 참여자 빠른 적응, 코드 일관성 확보 및 유지보수 비용 감소",
                  highlight: true,
                },
              ],
            },
          ],
        },
        {
          title: "S0사 AI 면접 플랫폼",
          period: "2024.09 ~ 2024.11",
          description: "웹캠과 음성 기반 AI 면접 서비스",
          tags: ["TypeScript", "React", "Jotai", "Vite", "pnpm"],
          achievements: [
            {
              title: "프로젝트 아키텍처 설계 및 구축 (기여도 80%)",
              details: [
                {
                  text: "→ 초기 단계부터 폴더 구조, 상태 관리(Jotai), 빌드 환경(Vite, pnpm) 등 프로젝트 전반 설계 주도",
                  highlight: false,
                },
                {
                  text: "→ 결과: 일관된 개발 기반 확립으로 3개월 내 안정적 릴리즈 달성",
                  highlight: true,
                },
              ],
            },
            {
              title: "웹캠, 오디오 미디어 기능 구현",
              details: [
                {
                  text: "→ react-webcam 활용 면접 영상 촬영 기능 구현",
                  highlight: false,
                },
                {
                  text: "→ wavesurfer.js 활용 오디오 시각화 및 재생 기능 개발",
                  highlight: false,
                },
              ],
            },
            {
              title: "코드 일관성과 재사용성을 고려한 공통 컴포넌트 개발 (기여도 80%)",
              details: [
                {
                  text: "→ 반복 UI를 재사용 가능한 구조로 설계하여 코드 일관성 확보 및 개발 생산성 향상",
                  highlight: false,
                },
              ],
            },
          ],
        },
        {
          title: "S0사 반도체 머신러닝 플랫폼",
          period: "2025.04 ~ 진행 중",
          description: "반도체 공정 이상 모니터링 및 검사 AI",
          tags: ["JavaScript", "React", "Redux", "Zustand", "Styled-components"],
          achievements: [
            {
              title: "레거시 코드 리팩토링으로 서비스 품질 개선",
              details: [
                {
                  text: "→ 공통 컴포넌트 기능 비정상 동작 이슈 직접 분석하고 개선",
                  highlight: false,
                },
                {
                  text: "→ 결과: 장기 미해결 오류 해결로 기능 안정성 및 사용자 경험 향상",
                  highlight: true,
                },
              ],
            },
            {
              title: "빌드 및 개발 환경 현대화 (진행 중)",
              details: [
                {
                  text: "→ CRA → Vite 마이그레이션으로 빌드 속도 및 개발 효율 개선 진행",
                  highlight: false,
                },
                {
                  text: "→ React 16 → 18 메이저 버전 업그레이드 (레거시 호환성 고려한 단계적 전환)",
                  highlight: false,
                },
              ],
            },
          ],
        },
        {
          title: "쿠0사 차량 관리 시스템",
          period: "2023.10 ~ 2024.05",
          description: "차량 정비 및 보험 관리 B2B 서비스",
          tags: ["TypeScript", "React", "Redux"],
          achievements: [
            {
              title: "프론트엔드 팀 리딩 및 아키텍처 설계",
              details: [
                {
                  text: "→ 요구사항 분석 기반 업무 분배 및 진행 상황 관리로 일정 내 릴리즈 달성 (기여도 90%)",
                  highlight: false,
                },
              ],
            },
            {
              title: "대용량 데이터 렌더링 성능 최적화",
              details: [
                {
                  text: "→ 테이블 필터 라이브러리에서 지원하지 않는 virtualization 기법 활용",
                  highlight: false,
                },
                {
                  text: "→ 화면에 노출되는 데이터만 렌더링되도록 구조 변경",
                  highlight: false,
                },
                {
                  text: "→ 결과: 렌더링 성능 1.5s → 0.5s 개선, 스크롤 지연 및 UX 저하 문제 해결",
                  highlight: true,
                },
              ],
            },
            {
              title: "다국어 리소스 자동화로 개발 효율 극대화",
              details: [
                {
                  text: "→ Google Spreadsheet API 활용 다국어 리소스 자동 생성 프로세스 구축",
                  highlight: false,
                },
                {
                  text: "→ 결과: 반복 작업 자동화로 업무 효율 및 개발 생산성 90% 향상",
                  highlight: true,
                },
                {
                  text: "→ 사내 Confluence 공유로 유사 프로젝트 표준 사례로 확산",
                  highlight: false,
                },
              ],
            },
            {
              title: "다직군 협업을 통한 B2B 서비스 개발 및 운영",
              details: [
                {
                  text: "→ 기획, 디자인, 백엔드와 협업하며 웹 및 모바일 환경 대응",
                  highlight: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "아주대학교",
      major: "(정보 통신)미디어학과",
      period: "2014.03 ~ 2021.02",
    },
  ],
};
