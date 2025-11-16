import styled from "styled-components";
import { H1, P } from "../common/CommonTag";

const HeaderWrapper = styled.header`
  border: 1px solid black;
  width: 840px;
  height: 150px;
  display: flex;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid black; */
  padding: 20px;
`

const WebSiteWrapper = styled.div`
  width: 80px;
  height: 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={`${import.meta.env.BASE_URL}img/image.jpeg`} alt="이미지" 
        style={
          {
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "50%",
            // border: "1px solid green"
          }
        }
      />

      <DivWrapper>
        <H1>김혁중</H1>
        <P>프론트엔드, 임베디드 개발자 지망</P>
        <WebSiteWrapper>
          <P>Website.com</P>
        </WebSiteWrapper>
      </DivWrapper>
      
    </HeaderWrapper>
  )
}

export default Header;