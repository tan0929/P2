import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import breakpoint from 'styled-components-breakpoint';
import { Main, Secondary } from '../components/text';
import { Media } from 'react-breakpoints';

const StyledImg = styled(Img)`
    width: 100%;
    height: 400px;
    
`;

const AbsolutePanel = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 300px;
    text-align: center;
    ${breakpoint('tablet')`
        width: 400px;
        left: 50px;
        height: 400px;
    `}
`;

const Welcome = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Section>
                <StyledImg fluid={data.test.childImageSharp.fluid} />
                <Panel data={data}/>
            </Section>   
        )}
    />
);

const Panel = ({data})=>(
    <Media>{
        ({breakpoints, currentBreakpoint})=>{
            const large = breakpoints[currentBreakpoint] > breakpoints.mobileLandscape;
            return(
                <AbsolutePanel>
                    <Main size={large?'80px':'55px'} color='#DAC6BD' margin='100px 0 0 0'>{data.site.siteMetadata.title}</Main>
                    <Secondary size={large?'20px':'18px'}>{data.site.siteMetadata.slogan}</Secondary>
                </AbsolutePanel>
            );
        }
    }</Media>
);

export default Welcome;

const query = graphql`
  query {
    test : file(relativePath: { eq: "01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site{
        siteMetadata{
            title
            slogan
        }
    }
  }
`;