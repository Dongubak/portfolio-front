import styled from "styled-components";
import type { JSX } from "@emotion/react/jsx-runtime";

type FooterComponentPropsType = {
  children: JSX.Element  
}

const FooterWrapper = styled.footer`
  border: 1px solid black;
`;

const Footer = ({children} : FooterComponentPropsType) => {
  return (
    <FooterWrapper>
      {children}
    </FooterWrapper>  
  )
}

export default Footer;