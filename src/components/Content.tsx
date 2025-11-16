import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { EXPERIENCE_DOC_URL, STATIC_RESUME_URL } from "../common/constants";

type SectionItem = {
  date: string;
  title: string;
  content: string;
  link?: string;
};

type SectionType = {
  key: string;
  title: string;
  description?: string;
  meta?: string;
  items?: SectionItem[];
};

const sections: SectionType[] = [
  {
    key: "intro",
    title: "간단한 소개",
    description:
      "사용자 중심의 웹 시스템을 직접 설계·운영한 경험을 바탕으로 실질적인 IT 문제 해결력과 협업 역량을 길렀습니다. 변화하는 요구사항에 유연하게 대응하고 새로운 기술을 빠르게 습득해 적용하는 강점을 살려, 기능 구현부터 전략 수립·시스템 개선까지 능동적으로 기여하는 개발자가 되고자 합니다.",
  },
  {
    key: "experience-paper",
    title: "경험기술서",
    description:
      "현장 경험과 프로젝트별 역할, 성과를 세부적으로 정리한 PDF 문서를 통해 협업 방식과 문제 해결 과정을 한 번에 확인할 수 있습니다.",
    items: [
      {
        date: "PDF",
        title: "김혁중 경험기술서 (2025)",
        content: "주요 프로젝트 핵심 지표, 장애 극복 사례, 임베디드·웹 통합 경험 상세 수록",
        link: EXPERIENCE_DOC_URL,
      },
      {
        date: "PDF",
        title: "김혁중 스태틱 이력서 (프론트)",
        content: "포트폴리오 요약, 핵심 기술 스택, 디자인 일관성을 담은 정적 이력서",
        link: STATIC_RESUME_URL,
      },
    ],
  },
  {
    key: "projects",
    title: "프로젝트 경험",
    meta: "복잡한 문제를 제품화한 경험",
    items: [
      {
        date: "25.05 - 25.11",
        title: "사물 운송 로봇",
        content: "캡스톤 디자인 · 군산대학교",
        link: "https://github.com/Dongubak/Warehouse-Transportation-Robot",
      },
      {
        date: "25.02 - 25.04",
        title: "자율주행 로봇 제어 시스템",
        content: "캡스톤 디자인 · 군산대학교",
        link: "https://github.com/Dongubak/koabackend",
      },
      {
        date: "24.04 - 24.12",
        title: "군산대 시간표 기반 커뮤니티 앱",
        content: "캡스톤 디자인 · 군산대학교",
        link: "https://github.com/Dongubak/koabackend",
      },
    ],
  },
  {
    key: "toy",
    title: "토이 프로젝트",
    meta: "Prototyping & Hacking",
    items: [
      {
        date: "25.05 - 25.06",
        title: "실외기 보호 장치 제어기",
        content: "환경 데이터 수집 및 자동 제어 UI",
      },
      {
        date: "25.03",
        title: "습도 감지 제어기",
        content: "센서 데이터 시각화 대시보드 설계",
      },
      {
        date: "25.02 - 25.04",
        title: "동아리 공식 홈페이지 제작",
        content: "콘텐츠 전략부터 배포 자동화까지 리드",
        link: "https://github.com/Dongubak/blog-frontend",
      },
    ],
  },
  {
    key: "activities",
    title: "대외 활동",
    meta: "Leadership & Field Experience",
    description:
      "배운 기술을 새싹 교육에 나누고, 팀장을 맡아 협업 체계를 다듬으면서 커뮤니케이션 역량과 책임감을 키웠습니다.",
    items: [
      {
        date: "2025.07.24",
        title: "SW 교육 봉사단 · 보조강사",
        content:
          "대야남초 3-6학년 11명 대상 아두이노 기초·RC카 실습 운영, 배운 기술이 새싹 교육에 쓰인다는 보람을 느낌",
      },
      {
        date: "2025.07.31",
        title: "SW 교육 봉사단 · 보조강사",
        content: "중1 학생 27명과 자율주행 자동차 제작, 센서·모터 조립 지도하며 가르치는 즐거움 체감",
      },
      {
        date: "2024.04 - 2024.12",
        title: "교내 캡스톤디자인 팀장",
        content:
          "일일 스크럼·명세 문서화를 통해 의사소통 미스를 줄이고, Git·노션으로 버전 관리와 기록을 최신화",
      },
      {
        date: "2022.08 - 2022.09",
        title: "학술동아리(KTC) 회장",
        content:
          "쇠퇴하던 동아리를 부원 의견 수렴과 목표 재정비로 재활성화하며 리더십과 경청의 중요성을 체득",
      },
    ],
  },
  {
    key: "work",
    title: "아르바이트 경험",
    description:
      "고된 자동차 도장 현장에서 땀과 먼지를 견디며 끈기를 키웠고, 완벽한 마감을 위해 반복 작업을 견뎌내는 정신력을 배웠습니다.",
    items: [
      {
        date: "2023 - 2025",
        title: "자동차 도장",
        content: "퍼티 샌딩으로 면을 다듬고, 스프레이건 도색을 보조하며 마감 품질을 챙김",
      },
    ],
  },
  {
    key: "certifications",
    title: "자격증",
    items: [
      {
        date: "2025.09",
        title: "정보처리기사",
        content: "한국산업인력공단",
      },
      {
        date: "2025.01",
        title: "PCCP Lv.4",
        content: "네이버 커넥트 재단 · 알고리즘 역량 인증",
      },
      {
        date: "2022.04",
        title: "자동차 운전면허 1종 보통",
        content: "경기도남부경찰청",
      },
    ],
  },
  {
    key: "awards",
    title: "수상 경력",
    items: [
      {
        date: "2025.10",
        title: "남원 메타모빌리티 해커톤 대회 AWS상",
        content: "AWS DeepRacer Car 활용 자율주행 시나리오 설계",
      },
      {
        date: "2025.08",
        title: "제12회 대한민국 SW융합 해커톤 대회 우수상",
        content: "과학기술정보통신부",
      },
      {
        date: "2024.12",
        title: "교내 캡스톤 디자인 동상",
        content: "군산대학교 · 12팀 중 3위",
      },
      {
        date: "2016.05",
        title: "로봇프로그램 경기도 교육감상",
        content: "창의과학교육연구회 · 전국 1위",
      },
    ],
  },
  {
    key: "education",
    title: "학력",
    items: [
      {
        date: "2020 - 2025",
        title: "군산대학교 컴퓨터 정보통신공학부",
        content: "인공지능융합학과 · 4.21/4.5",
      },
      {
        date: "2016 - 2019",
        title: "효명고등학교",
        content: "경기도 평택시",
      },
    ],
  },
  {
    key: "language",
    title: "어학",
    items: [
      {
        date: "2023.09",
        title: "TOEIC 785점",
        content: "ETS",
      },
    ],
  },
  {
    key: "military",
    title: "병역",
    items: [
      {
        date: "2020.08 - 2022.05",
        title: "공군 병장 · 무선통신병",
        content: "항공통신 장비 운용 및 상황 보고",
      },
    ],
  },
];

const ContentLayout = styled.div`
  display: flex;
  gap: clamp(24px, 5vw, 64px);
  align-items: flex-start;
`;

const ProgressNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: sticky;
  top: clamp(80px, 12vh, 140px);
  min-width: 190px;
  padding-top: 12px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const ProgressItem = styled.button<{ $active: boolean }>`
  border: none;
  background: ${({ $active }) => ($active ? "rgba(94, 111, 255, 0.14)" : "transparent")};
  color: ${({ $active }) => ($active ? "#525fe7" : "#7a809c")};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  text-align: left;
  padding: 8px 16px 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: #525fe7;
  }

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $active }) => ($active ? "#525fe7" : "#cdd3e8")};
    box-shadow: ${({ $active }) => ($active ? "0 0 0 6px rgba(82,95,231,0.18)" : "none")};
  }
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 32px);
`;

const SectionCard = styled.section<{ $visible: boolean }>`
  background: rgba(255, 255, 255, 0.96);
  border-radius: 28px;
  padding: clamp(22px, 3vw, 36px);
  border: 1px solid #e3e8f5;
  box-shadow: 0 22px 35px rgba(15, 23, 42, 0.08);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "translateY(0) scale(1)" : "translateY(35px) scale(0.97)")};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  letter-spacing: -0.01em;

  &::before {
    content: "";
    width: 34px;
    height: 6px;
    border-radius: 999px;
    background: linear-gradient(90deg, #5d6fff, #7f5dff, #ffa3c3);
  }
`;

const SectionMeta = styled.span`
  font-size: 0.9rem;
  color: #6d7391;
`;

const SectionDescription = styled.p`
  margin: 18px 0 0;
  font-size: 1rem;
  line-height: 1.7;
  color: #4a5273;
`;

const Timeline = styled.div`
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const SectionBlock = ({
  section,
  registerRef,
}: {
  section: SectionType;
  registerRef: (key: string, node: HTMLElement | null) => void;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        ref.current = node;
        registerRef(section.key, node);
      } else {
        ref.current = null;
        registerRef(section.key, null);
      }
    },
    [registerRef, section.key]
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.25,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionCard ref={setRefs} $visible={visible}>
      <SectionHeader>
        <SectionTitle>{section.title}</SectionTitle>
        {section.meta && <SectionMeta>{section.meta}</SectionMeta>}
      </SectionHeader>
      {section.description && <SectionDescription>{section.description}</SectionDescription>}
      {section.items && (
        <Timeline>
          {section.items.map((item) => (
            <ListItem
              key={`${section.key}-${item.title}`}
              date={item.date}
              title={item.title}
              content={item.content}
              link={item.link}
            />
          ))}
        </Timeline>
      )}
    </SectionCard>
  );
};

const Content = () => {
  const [activeSection, setActiveSection] = useState(sections[0].key);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const scrollFrame = useRef<number | null>(null);

  const registerRef = useCallback((key: string, node: HTMLElement | null) => {
    if (node) {
      sectionRefs.current[key] = node;
      node.setAttribute("data-section-key", key);
    } else {
      delete sectionRefs.current[key];
    }
  }, []);

  const handleProgressClick = useCallback((key: string) => {
    const node = sectionRefs.current[key];
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const updateActiveSection = useCallback(() => {
    const focusLine = window.innerHeight * 0.28;
    let bestKey = sections[0].key;
    let bestDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section) => {
      const node = sectionRefs.current[section.key];
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const distance = Math.abs(rect.top - focusLine);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestKey = section.key;
      }
    });

    setActiveSection((prev) => (prev === bestKey ? prev : bestKey));
  }, []);

  useEffect(() => {
    updateActiveSection();
    const handleScroll = () => {
      if (scrollFrame.current) {
        cancelAnimationFrame(scrollFrame.current);
      }
      scrollFrame.current = requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollFrame.current) {
        cancelAnimationFrame(scrollFrame.current);
      }
    };
  }, [updateActiveSection]);

  return (
    <ContentLayout>
      <ProgressNav>
        {sections.map((section) => (
          <ProgressItem
            key={section.key}
            $active={activeSection === section.key}
            onClick={() => handleProgressClick(section.key)}
          >
            {section.title}
          </ProgressItem>
        ))}
      </ProgressNav>
      <ContentWrapper>
        {sections.map((section) => (
          <SectionBlock key={section.key} section={section} registerRef={registerRef} />
        ))}
      </ContentWrapper>
    </ContentLayout>
  )
}

export default Content;
