import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import breakpoint from 'styled-components-breakpoint';
import { Main, Secondary } from '../components/text';

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
                <StyledImg fluid={data.bg.childImageSharp.fluid} />
                <Panel data={data}/>
            </Section>   
        )}
    />
);

const Title = styled(Main)`
    color: #DBC8BE;
    margin: 100px 0 0 0;
    font-size: 55px;
    ${breakpoint('tablet')`
        font-size: 80px;
    `}
`;

const Subtitle = styled(Secondary)`
    font-size: 18px;
    ${breakpoint('tablet')`
        font-size: 20px;
    `}
`;

const Panel = ({data})=>{
    return(
        <AbsolutePanel>
            <Title>{data.site.siteMetadata.title}</Title>
            <Subtitle contrast>{data.site.siteMetadata.slogan}</Subtitle>
        </AbsolutePanel>
    );
};

export default Welcome;

const query = graphql`
  query {
    bg: file(sourceInstanceName:{eq: "images"} relativePath: { eq: "01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
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