import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  :root {
    color: #0f172a;
    font-family: 'Pretendard', 'Inter', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #f3f6fb;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(46, 145, 255, 0.2), transparent 55%) center / cover, #0f172a;
  }

  #root {
    isolation: isolate;
  }
`;

const Page = styled.div`
  min-height: 100vh;
  padding: clamp(32px, 6vw, 90px) clamp(20px, 5vw, 80px) 120px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Layout = styled.div`
  width: min(1040px, 100%);
  display: flex;
  flex-direction: column;
  gap: clamp(32px, 4vw, 48px);
`;

const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  padding-top: clamp(60px, 12vh, 160px);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Layout>
          <HeroSection>
            <Header />
          </HeroSection>
          <Main />
        </Layout>
      </Page>
    </>
  )
}

export default App
