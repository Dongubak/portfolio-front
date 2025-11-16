import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(28px, 4vw, 40px);
`;

const Main = () => {
  return (
    <MainWrapper>
      <Content />
      <Footer />
    </MainWrapper>
  )
}

export default Main;
