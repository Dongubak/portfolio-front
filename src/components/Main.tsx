import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 840px;
  gap: 58px;
`;

const Main = () => {

  return (
    <MainWrapper>
      <Content />
      <Footer>
        <p>Footer</p>
      </Footer>
    </MainWrapper>
  )
}

export default Main;