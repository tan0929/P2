import React from "react"
import styled from 'styled-components';
import Nav from './nav';
import MobileNav from './mobileNav';
import Link from './betterLink';
import { Media } from 'react-breakpoints';

import { Main, Secondary } from './text';


const StyledHeader = styled.header`
  user-select: none;
  background-color: #1E2025;
  display: flex;
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  min-width: 150px;
  padding: 30px 40px;
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
    <Media>
    {({breakpoints, currentBreakpoint})=>(
      breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ?
      <Nav />
      :
      <MobileNav />
    )}  
    </Media>
  </StyledHeader>
)

export default Header;
