import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EXPERIENCE_DOC_URL } from "../common/constants";

const FooterWrapper = styled.footer<{ $visible: boolean }>`
  width: 100%;
  background: #10142e;
  border-radius: 30px;
  padding: clamp(26px, 4vw, 40px);
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: space-between;
  align-items: center;
  color: #f6f8ff;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 25px 45px rgba(6, 7, 20, 0.45);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(40px)")};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const FooterText = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  letter-spacing: -0.01em;
`;

const FooterDescription = styled.p`
  margin: 0;
  color: rgba(239, 242, 255, 0.8);
  line-height: 1.7;
`;

const FooterActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  text-decoration: none;
  background: linear-gradient(120deg, #6b6eff, #f78bc2);
  color: #10142e;
  padding: 12px 28px;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: 0 12px 30px rgba(101, 109, 255, 0.4);
`;

const SecondaryButton = styled.a`
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #f6f8ff;
  padding: 12px 26px;
  border-radius: 999px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.08);
`;

const Footer = () => {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <FooterWrapper ref={wrapperRef} $visible={visible}>
      <FooterText>
        <FooterTitle>다음 프로젝트를 함께할 파트너를 찾고 있습니다.</FooterTitle>
        <FooterDescription>
          사용자 경험을 중심에 둔 프론트엔드 제품, 임베디드 제어 UI 등 무엇이든 환영합니다.
          짧은 이야기라도 좋으니 편하게 연락 주세요.
        </FooterDescription>
      </FooterText>
      <FooterActions>
        <PrimaryButton href="mailto:x001125@gmail.com">메일 보내기</PrimaryButton>
        {/* <SecondaryButton href={EXPERIENCE_DOC_URL} target="_blank" rel="noreferrer">
          경험기술서 열기
        </SecondaryButton> */}
      </FooterActions>
    </FooterWrapper>
  )
}

export default Footer;
