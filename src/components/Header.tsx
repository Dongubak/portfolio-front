import { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header<{ $progress: number }>`
  width: 100%;
  background: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.18), transparent 40%),
    linear-gradient(135deg, #2f6bff, #7c75ff 60%, #f39bcc);
  padding: ${({ $progress }) => `clamp(24px, calc(48px - 12px * ${$progress}), 48px)`};
  border-radius: ${({ $progress }) => `calc(36px - 10px * ${$progress})`};
  display: flex;
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  color: #f6f7ff;
  box-shadow: ${({ $progress }) =>
    $progress > 0.4 ? "0 20px 40px rgba(7, 10, 30, 0.25)" : "0 35px 60px rgba(15, 20, 60, 0.35)"};
  position: relative;
  overflow: hidden;
  transform-origin: top center;
  transform: ${({ $progress }) =>
    `translateY(${(-50 * $progress).toFixed(2)}px) scale(${(1 - 0.22 * $progress).toFixed(3)})`};
  opacity: ${({ $progress }) => (1 - $progress).toFixed(3)};
  pointer-events: ${({ $progress }) => ($progress > 0.92 ? "none" : "auto")};
  transition: padding 0.35s ease, border-radius 0.35s ease, box-shadow 0.35s ease,
    transform 0.35s ease, opacity 0.35s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 18px;
    border-radius: ${({ $progress }) => `calc(28px - 8px * ${$progress})`};
    border: 1px solid rgba(255, 255, 255, 0.18);
    pointer-events: none;
    transition: border-radius 0.35s ease;
  }
`;

const Avatar = styled.img<{ $progress: number }>`
  width: ${({ $progress }) => `clamp(96px, calc(164px - 50px * ${$progress}), 164px)`};
  height: ${({ $progress }) => `clamp(96px, calc(164px - 50px * ${$progress}), 164px)`};
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 20px 35px rgba(15, 20, 60, 0.45);
  flex-shrink: 0;
  transition: width 0.35s ease, height 0.35s ease;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1<{ $progress: number }>`
  margin: 0;
  font-size: ${({ $progress }) =>
    `clamp(1.4rem, calc(2.8rem - 1rem * ${$progress}), 2.8rem)`};
  letter-spacing: -0.02em;
  transition: font-size 0.35s ease;
`;

const Subtitle = styled.p<{ $progress: number }>`
  margin: 0;
  font-size: ${({ $progress }) =>
    `clamp(0.9rem, calc(1.2rem - 0.3rem * ${$progress}), 1.2rem)`};
  color: rgba(242, 245, 255, 0.92);
  transition: font-size 0.35s ease;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  font-size: 0.9rem;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(13, 20, 45, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.16);
`;

const ContactGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;

const ContactCard = styled.div`
  background: rgba(10, 15, 35, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 14px 16px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
`;

const Label = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.64);
`;

const Value = styled.p`
  margin: 6px 0 0;
  font-size: 1rem;
  font-weight: 600;
`;

const LinkValue = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-bottom-color 0.2s ease;

  &:hover {
    color: #ffd5ff;
    border-bottom-color: rgba(255, 213, 255, 0.8);
  }
`;

const skillTags = [
  "React",
  "TypeScript",
  "Redux",
  "Redux-Saga",
  "MySQL",
  "ATmega328P",
  "ROS2",
  "SLAM",
];

const Header = () => {
  const [shrinkProgress, setShrinkProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / 220));
      setShrinkProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper $progress={shrinkProgress}>
      <Avatar src={`${import.meta.env.BASE_URL}img/image.jpeg`} alt="김혁중" $progress={shrinkProgress} />
      <InfoColumn>
        <Tag>개발자 신입 포트폴리오</Tag>
        <Title $progress={shrinkProgress}>김혁중</Title>
        <Subtitle $progress={shrinkProgress}>사용자 중심의 경험을 설계하는 프론트엔드 & 임베디드 개발자</Subtitle>
        <ChipList>
          {skillTags.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </ChipList>
        <ContactGrid>
          <ContactCard>
            <Label>EMAIL</Label>
            <Value>x001125@gmail.com</Value>
          </ContactCard>
          <ContactCard>
            <Label>LOCATION</Label>
            <Value>경기도 평택시</Value>
          </ContactCard>
          <ContactCard>
            <Label>GITHUB</Label>
            <Value>
              <LinkValue href="https://github.com/Dongubak" target="_blank" rel="noreferrer">
                github.com/Dongubak
              </LinkValue>
            </Value>
          </ContactCard>
        </ContactGrid>
      </InfoColumn>
    </HeaderWrapper>
  )
}

export default Header;
