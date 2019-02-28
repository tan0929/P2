import React from "react"
import styled from 'styled-components';
import Nav from './nav';
import MobileNav from './mobileNav';
import Link from './betterLink';
import ReactResizeDetector from 'react-resize-detector';
import { Main, Secondary } from './text';

const bp = 768;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  user-select: none;
  background-color: #1E2025;
  display: flex;
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  min-width: 150px;
  padding: 30px 40px;
  -webkit-tap-highlight-color: transparent;
`;

const Title = styled(Main)`
  margin: auto;
  font-size: 30px;
`;

const Subtitle = styled(Secondary)`
  padding: 0 15px 0 0;
  margin: auto;
`;

const Header = ({ siteTitle, siteSubtitle }) => (
  <StyledHeader>
    <TitleWrapper>
      <Subtitle contrast>
        {siteSubtitle}
      </Subtitle>
      <Link to='/'>
        <Title contrast>
          {siteTitle}
        </Title>
      </Link>
    </TitleWrapper>
    <ReactResizeDetector handleWidth>
      {(width)=> width ? width > bp ? <Nav />: <MobileNav /> : <div />}
    </ReactResizeDetector>
  </StyledHeader>
)

export default Header;
