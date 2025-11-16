import styled from "styled-components";
import { H1 } from "../common/CommonTag";
import ListItem from "./Listitem";


const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  gap: 24px;
`;

const SectionWrapper = styled.section`
  h1 {
    margin: 0 0 0rem 0;
    font-size: 1.5rem;
  }
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid black;
`

const Content = () => {
  return (
    <ContentWrapper>
      <SectionWrapper>
          <h1>간단한 소개</h1>
          <p style={{
            margin: 0
          }}>저는 웹과 임베디드 시스템에 폭넓은 관심을 가진 지원자입니다. 기술을 깊이 이해하고, 실제 사용자에게 유용한 서비스를 만드는 것을 목표로 끊임없이 학습하고 성장하고자 합니다.</p>
      </SectionWrapper>
      <SectionWrapper>
        <h1>프로젝트 경험</h1>
        <ListItem 
            date="25.05 - 25.11" 
            title="사물 운송 로봇" 
            content="캡스톤 디자인, 군산대학교" 
          />
          <ListItem 
            date="25.02 - 25.04" 
            title="자율주행 로봇 제어 시스템" 
            content="캡스톤디자인, 군산대학교" 
          />
          <ListItem 
            date="24.04 - 24.12" 
            title="군산대 시간표 기반 커뮤니티 애플리케이션" 
            content="캡스톤디자인, 군산대학교" 
          />
      </SectionWrapper>

      <SectionWrapper>
        <H1>대외 활동</H1>
        <ListItem 
            date="2023" 
            title="Exploring the Intersection of Design and Technology" 
            content="Collaboration with Mia, Leo, and Ava" 
          />
      </SectionWrapper>

      <SectionWrapper>
        <H1>아르바이트 경험</H1>
        <ListItem 
            date="2023 - 2025" 
            title="자동차 도장" 
            content="Collaboration with Mia, Leo, and Ava" 
          />
      </SectionWrapper>

      <SectionWrapper>
        <H1></H1>
        <ListItem 
            date="2023 - 2025" 
            title="자동차 도장" 
            content="Collaboration with Mia, Leo, and Ava" 
          />
      </SectionWrapper>

      <SectionWrapper>
        <H1>토이 프로젝트</H1>
        <ListItem 
            date="25.05 - 25.06" 
            title="실외기 보호 장치 제어기" 
            content="Collaboration with Mia, Leo, and Ava" 
          />
        <ListItem 
          date="25.03" 
          title="습도 감지 제어기" 
          content="Collaboration with Mia, Leo, and Ava" 
        />
        <ListItem 
          date="25.02 - 25.04" 
          title="동아리 공식 홈페이지 제작" 
          content="Collaboration with Mia, Leo, and Ava" 
        />
      </SectionWrapper>

      <SectionWrapper>
        <H1>학력</H1>
        <ListItem 
            date="2020 - 2025" 
            title="군산대학교 컴퓨터 정보통신공학부" 
            content="인공지능융합학과" 
          />
        <ListItem 
          date="2016 - 2019" 
          title="효명고등학교" 
          content="경기도 평택시" 
        />
      </SectionWrapper>
    </ContentWrapper>
  )
}

export default Content;