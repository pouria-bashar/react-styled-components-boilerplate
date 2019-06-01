import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TipUpload from './views/TipUpload';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'semantic-ui-css/semantic.min.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin: 24px;
`;

const Footer = styled.div`
  height: 30px;
  background: lightblue;
`;
const Header = styled.header`
  background: black;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  color: white;
`;

const HomePage = () => (
  <Container>
    <GlobalStyle />
    <Header>
      Tip Upload
    </Header>
    <Main>
      <TipUpload />
    </Main>
    <Footer />
  </Container>
);

const App = () => (
  <Router>
    <Route path="/" component={HomePage} />
  </Router>
);
export default App;
