import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import breakpoint from 'styled-components-breakpoint';
import { Main, Secondary } from '../components/text';
import { Media } from 'react-breakpoints';
import Button from '../components/button';
import EmailLink from '../components/emailLink';

const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
`;

const Fixed = styled.div`
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const AbsolutePanel = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 400px;
    text-align: center;
    ${breakpoint('tablet')`
        width: 400px;
        right: 50px;
        height: 500px;
    `}
`;

const Title = ({children, isLarge})=>{
    return(
        <Main size={isLarge?'30px':'20px'} color='#DAC6BD' margin='60px 0 30px 0'>
            {children}
        </Main>
    );
}

const Text = ({children, isLarge})=>(
    <Secondary  size={isLarge?'20px':'18px'} margin='0'>
        {children}
    </Secondary>
);

const Space = styled.div`
    width: 100%;
    height: 20px;
`;

const GetInTouch = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Section backgroundColor='rgba(0,0,0,0)' height='500px'>
                <Fixed>
                    <StyledImg fluid={data.bg.childImageSharp.fluid} />
                </Fixed>
                <Panel data={data}/>
            </Section>   
        )}
    />
);

const Panel = ({data})=>(
    <Media>{
        ({breakpoints, currentBreakpoint})=>{
            const isLarge = breakpoints[currentBreakpoint] > breakpoints.mobileLandscape;
            return(
                <AbsolutePanel>
                    <Title isLarge={isLarge}>
                        Private / International workshops
                    </Title>
                    <Text isLarge={isLarge}>IN</Text>
                    <Text isLarge={isLarge}>Beijing</Text>
                    <Text isLarge={isLarge}>Taiwan</Text>
                    <Text isLarge={isLarge}>other countries</Text>
                    <Text isLarge={isLarge}>Looking forward to hearing from you</Text>
                    <Space />
                    <EmailLink><Text isLarge={isLarge}>{data.site.siteMetadata.email}</Text></EmailLink>
                    
                    <Button contrast text='Get In Touch' margin='auto'/>
                </AbsolutePanel>
            );
        }
    }</Media>
);

export default GetInTouch;

const query = graphql`
  query {
    bg : file(relativePath: { eq: "13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site{
        siteMetadata{
            email
            title
            slogan
        }
    }
  }
`;