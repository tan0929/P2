import React from "react"
import styled from 'styled-components';
import Nav from './nav';
import MobileNav from './mobileNav';
import Link from './betterLink';
import { Media } from 'react-breakpoints';

import { Main, Secondary } from './text';


const StyledHeader = styled.header`
  background-color: #1E2025;
  display: flex;
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  min-width: 150px;
  padding: 30px 40px;
`;

const Title = ({children})=>(
  <Main margin='auto'>{children}</Main>
);

const Subtitle = ({children})=>(
  <Secondary padding='0 15px 0 0' margin='auto'>{children}</Secondary>
);

const Header = ({ siteTitle, siteSubtitle }) => (
  <StyledHeader>
    <TitleWrapper>
      <Subtitle>
        {siteSubtitle}
      </Subtitle>
      <Title>
        <Link to='/' color='#DDD'>
          {siteTitle}
        </Link>
      </Title>
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
