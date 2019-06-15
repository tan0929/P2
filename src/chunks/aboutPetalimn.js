import React from "react"
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import Section from '../components/section';
import breakpoint from 'styled-components-breakpoint';
import { Main, HtmlTextWrapper } from "../components/text";
import Button from '../components/button';
import Link from '../components/betterLink';
import HtmlReactParser from 'html-react-parser';

const Container = styled.div`
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 60px repeat(12,auto) 60px;
    width: 100%;
    display: grid;
    max-width: 1200px;
`;

const ImageWrapper = styled.div`
    grid-column: 2/span 9;
    grid-row: 2/span 11;
    ${breakpoint('tablet')`
        grid-column: 2/span 5;
    `}
`;

const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
`;

const Panel = styled.div`
    z-index: 1;
    grid-column: 3/span 9;
    grid-row: 3/span 11;
    ${breakpoint('tablet')`
        grid-column: 6/span 6;
    `}
    background-color: rgba(35,37,41,0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleWrapper = styled.div`
    text-align: center;
    
`;

const Title = styled(Main)`
    color: #DBC8BE;
    padding: 30px 0 0 0;
`;

const Text = styled(HtmlTextWrapper)`
    padding: 0 30px 30px 30px;
    margin: 0;
    line-height: 1.6em;
    max-width: 800px;
`;

const Background = styled(Section)`
    background-color: #DBC8BE;
`;

const AboutPetalimn = () => (
    <StaticQuery 
        query={query}
        render={data=>(
            <Background>
                <Container>
                    <ImageWrapper>
                        <StyledImg fluid={data.bg.childImageSharp.fluid}/>
                    </ImageWrapper>
                    <Panel>
                        <TitleWrapper>
                            <Title>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</Title>
                        </TitleWrapper>
                        <Text contrast>
                            {HtmlReactParser(data.allMarkdownRemark.edges[0].node.html)}
                        </Text>
                        <Link to='/contact'>
                            <Button contrast text='Get In Touch' margin='0 0 30px 0'/>
                        </Link>
                    </Panel>
                </Container>
            </Background>
        )}
    />
)

export default AboutPetalimn;

const query = graphql`
  query {
    bg: file(sourceInstanceName:{eq: "images"} relativePath: { eq: "871478871016155.jpeg" }) {
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
    allMarkdownRemark(filter:{frontmatter:{title :{
        eq: "About Petalimn"
      }}}){
      edges{
        node{
          html
          frontmatter{
              title
          }
        }
      }
    }
  }
`;