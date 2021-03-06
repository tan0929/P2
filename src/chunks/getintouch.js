import React from 'react';
import styled from 'styled-components';
import Section from '../components/section';
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";
import breakpoint from 'styled-components-breakpoint';
import { Main, Secondary } from '../components/text';
import Button from '../components/button';
import EmailLink from '../components/emailLink';
import Link from '../components/betterLink';

const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
`;

const Fixed = styled.div`
    position: fixed;
    z-index: -1;
    left: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
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

const Title = styled(Main)`
    color: #DBC8BE;
    margin: 60px 0 30px 0;
    font-size: 20px;
    ${breakpoint('tablet')`
        font-size: 30px;
    `}
`;

const Text = styled(Secondary)`
    margin: 0;
    font-size: 18px;
    ${breakpoint('tablet')`
        font-size: 20px;
    `}
`;

const Space = styled.div`
    width: 100%;
    height: 20px;
`;

const Background = styled(Section)`
    background-color: rgba(0,0,0,0);
    height: 500px;
`;

const LinkWrapper = styled.div`
    position: relative;
`;

const GetInTouch = ()=>(
    <StaticQuery
        query={query}
        render={data=>(
            <Background>
                <Fixed>
                    <StyledImg fluid={data.bg.childImageSharp.fluid} />
                </Fixed>
                <Panel data={data}/>
            </Background>   
        )}
    />
);

const Panel = ({data})=>(
    <AbsolutePanel>
        <Title>
            Private / International workshops
        </Title>
        <Text contrast>IN</Text>
        <Text contrast>Beijing</Text>
        <Text contrast>Taiwan</Text>
        <Text contrast>other countries</Text>
        <Text contrast>Looking forward to hearing from you</Text>
        <Space />
        <EmailLink><Text contrast>{data.site.siteMetadata.email}</Text></EmailLink>
        <LinkWrapper>
            <Link to='/contact'>
                <Button contrast text='Get In Touch' margin='30px auto'/>
            </Link>
        </LinkWrapper>
    </AbsolutePanel>
);

export default GetInTouch;

const query = graphql`
  query {
    bg: file(sourceInstanceName:{eq: "images"} relativePath: { eq: "20190327.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
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